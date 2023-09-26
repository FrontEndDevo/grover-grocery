"use client";
import Benefits from "@/components/Benefits";
import Delivery from "@/components/Delivery";
import Header from "@/components/Header";
import WhyChooseUs from "@/components/WhyChooseUs";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useDispatch } from "react-redux";
import { restaurantsActions } from "@/slices/restaurantsSlice";
import { fruitsActions } from "@/slices/fruitsSlice";

export const metadata = {
  title: "Home | Grover Grocery",
  description: "Grover Grocery homepage",
};

export default async function Home() {
  const dispatch = useDispatch();

  // Store the Restaurants.
  const restaurants = await getDocs(collection(db, "resturants"));
  restaurants.docs.forEach((rest) => {
    dispatch(
      restaurantsActions.addRestaurant({
        restaurant: rest.data().restaurant,
        foodItems: rest.data().foodItems,
      })
    );
  });

  // Store the Fruits.
  const fruits = await getDocs(collection(db, "fruits"));
  fruits.docs.forEach((fruit) => {
    dispatch(fruitsActions.addNewFruit(fruit.data()));
  });

  return (
    <>
      <Header />
      <Benefits />
      <WhyChooseUs />
      <Delivery />
    </>
  );
}
