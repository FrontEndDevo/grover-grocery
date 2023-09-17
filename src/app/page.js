"use client";
import Benefits from "@/components/Benefits";
import Delivery from "@/components/Delivery";
import Header from "@/components/Header";
import WhyChooseUs from "@/components/WhyChooseUs";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restaurantsActions } from "@/slices/restaurantsSlice";

export default async function Home() {
  const dispatch = useDispatch();
  const restaurants = await getDocs(collection(db, "resturants"));
  console.log(restaurants.docs[0].data());
  restaurants.docs.forEach((rest) => {
    dispatch(
      restaurantsActions.addRestaurant({
        restaurant: rest.data().restaurant,
        foodItems: rest.data().foodItems,
      })
    );
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
