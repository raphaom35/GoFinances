import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import HistoryCard from "../../components/HistoryCard";
import { VictoryPie } from "victory-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  ChartCointeiner,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Month,
  LoadContainer,
} from "./styles";
import { categories } from "../../utils/categories";
import { ScrollView } from "react-native-gesture-handler";
import ca from "date-fns/esm/locale/ca/index.js";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { format, addMonths, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useFocusEffect } from "@react-navigation/core";
export interface TransitionsData {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}
export interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFomated: string;
  percent: string;
  color: string;
}
export function Resume() {
  const [insLoadind, setInsLoadind] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([]);
  const totalByCategory: CategoryData[] = [];
  const theme = useTheme();

  function handleDateChange(action: "next" | "prev") {
   
    if (action === "next") {
      const newDate = addMonths(selectedDate, 1);
      setSelectedDate(newDate);
    } else {
      const newDate = subMonths(selectedDate, 1);
      setSelectedDate(newDate);
    }
  }

  async function loadData() {
    setInsLoadind(true);
    const datakey = "@gofinances:transations";
    const response = await AsyncStorage.getItem(datakey);
    const currency = "BRL";
    const responseFormatted = response ? JSON.parse(response) : [];
    const expensives = responseFormatted.filter(
      (expensive: TransitionsData) =>
        expensive.type === "negative" &&
        new Date(expensive.date).getMonth() ===
          new Date(selectedDate).getMonth() &&
        new Date(expensive.date).getFullYear() ===
          new Date(selectedDate).getFullYear()
    );

    const expensivesTotal = expensives.reduce(
      (accumulator: number, expensive: TransitionsData) => {
        return accumulator + Number(expensive.amount);
      },
      0
    );
    const totalByCategory: CategoryData[] = [];
    categories.forEach((category: any) => {
      let categorySum = 0;
      expensives.forEach((expensive: TransitionsData) => {
        if (category.key === expensive.category) {
          categorySum += Number(expensive.amount);
        }
      });

      if (categorySum > 0) {
        const total = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        const percent = `${((categorySum / expensivesTotal) * 100).toFixed(
          2
        )}%`;
        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFomated: total,
          percent: percent,
        });
      }
    });
    setTotalByCategories(totalByCategory);
    setInsLoadind(false);
  }
/*   useEffect(() => {
    loadData();
  }, [selectedDate]); */

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [selectedDate])
  );
  return (
    <Container>
      <Header>
        <Title>Resumo por Categoria</Title>
      </Header>
      {insLoadind ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <Content
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: useBottomTabBarHeight(),
          }}
        >
          <MonthSelect>
            <MonthSelectButton onPress={() => handleDateChange("prev")}>
              <MonthSelectIcon name="chevron-left" />
            </MonthSelectButton>

            <Month>
              {format(selectedDate, "MMMM, yyyy", { locale: ptBR })}
            </Month>

            <MonthSelectButton onPress={() => handleDateChange("next")}>
              <MonthSelectIcon name="chevron-right" />
            </MonthSelectButton>
          </MonthSelect>
          <ChartCointeiner>
            <VictoryPie
              data={totalByCategories}
              colorScale={totalByCategories.map(
                (category: CategoryData) => category.color
              )}
              style={{
                labels: {
                  fontSize: RFValue(18),
                  fontWeight: "bold",
                  fill: theme.colors.shape,
                },
              }}
              labelRadius={80}
              x="percent"
              y="total"
            />
          </ChartCointeiner>
          {totalByCategories.map((category: CategoryData) => (
            <HistoryCard
              key={category.key}
              title={category.name}
              amount={category.totalFomated}
              color={category.color}
            />
          ))}
        </Content>
      )}
    </Container>
  );
}

export default Resume;
