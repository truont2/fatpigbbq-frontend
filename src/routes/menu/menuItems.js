import corn from '../../assets/meals/corn.jpg'
import cornbread from '../../assets/meals/cornbread.jpg'
import fullrackribs from '../../assets/meals/full-rack-ribs.jpg'
import halfrack from '../../assets/meals/half-rack-ribs.jpg'
import kidsmeal from '../../assets/meals/kids-meal.jpg'
import lgChkMeal from '../../assets/meals/large-chicken-meal.jpg'
import lgRibsMeal from '../../assets/meals/large-rib-meal.jpg'
import largePPSandwich from '../../assets/meals/large-pulled-pork-sandwich.jpg'
import smRibsMeal from '../../assets/meals/smallRibsMeal.jpg'
import ppSandwich from '../../assets/meals/pulledPorkSandwhich.jpg'
import smChkMeal from '../../assets/meals/smallChickenMeal.jpg'
import beans from '../../assets/meals/beans.jpg'
import beer from '../../assets/meals/beer.jpg'
import water from '../../assets/meals/water.jpg'
import soda from '../../assets/meals/soda.jpg'
import thigh from '../../assets/meals/thigh.jpg'
import leg from '../../assets/meals/leg.jpg'
import chkQuarter from '../../assets/meals/chkquater.jpg'
import potato from '../../assets/meals/potato.jpg'
import coleslaw from '../../assets/meals/coleslaw.jpg'
import porkMeal from '../../assets/meals/porkMeal.jpg'
import rib from '../../assets/meals/rib.webp'

export const mealItems = [
    {
      title: "CHICKEN MEAL SMALL", 
      "type": "Meals", 
      "description": "Chicken Thigh, 1 Roll Coleslaw, Backed Beans,", 
      "price": "12.50", 
      image: smChkMeal
    },
    {
      title: "CHICKEN MEAL LARGE", 
      "type": "1/4 Chicken, 1 Roll Coleslaw, Backed Beans, 1/2 Corn", 
      "description": "1/4 Chicken, 1 Roll Coleslaw, Backed Beans, 1/2 Corn", 
      "price": "14.50", 
      image: lgChkMeal
    },
    {
      title: "RIBS MEAL SMALL", 
      "type": "3 Ribs, 1 Roll Coleslaw, Backed Beans", 
      "description": "3 Ribs, 1 Roll Coleslaw, Backed Beans", 
      "price": "12.50", 
      image: smRibsMeal
    },
    {
      title: "RIBS MEAL LARGE", 
      "type": "Meals", 
      "description": "4 Ribs, 1 Roll Coleslaw, Backed Beans, 1/2 Corn", 
      "price": "14.50", 
      image: lgRibsMeal
    },
    {
      title: "RIBS & CHICKEN COMBO SMALL", 
      "type": "Meals", 
      "description": "2 Ribs, Chicken Drumstick, 1 Roll Coleslaw, Backed Beans", 
      "price": "12.50", 
      image: lgRibsMeal
    },
    {
      title: "RIBS & CHICKEN COMBO LARGE", 
      "type": "Meals", 
      "description": "2 Ribs, Chicken Thigh, 1 Roll Coleslaw, Backed Beans, 1/2 Corn", 
      "price": "14.50", 
      image: lgChkMeal
    },
    {
      title: "PULLED PORK MEAL SMALL", 
      "type": "Meals", 
      "description": "Pulled Pork, 1 Roll Coleslaw, Backed Beans", 
      "price": "12.50", 
      image: porkMeal
    },
    {
      title: "PULLED PORK MEAL LARGE", 
      "type": "Meals", 
      "description": " Extra Pulled Pork, 1 Roll Coleslaw, Backed Beans, 1/2 Corn", 
      "price": "14.50", 
      image: porkMeal
    },
    {
      title: "HALF RACK OF RIBS", 
      "type": "Meals", 
      "description": "Six individual Ribs. Meat only", 
      "price": "14.95", 
      image: halfrack
    },
    {
      title: "FULL RACK OF RIBS", 
      "type": "Meals", 
      "description": "Consists of 11 individual ribs and topped with extra barbecue sauce. Meat only", 
      "price": "24.95", 
      image: fullrackribs
    },
    {
      title: "PULLED PORK SANDWICH", 
      "type": "Meals", 
      "description": "Our signature pulled pork served on sandwich buns and topped with some fresh coleslaw", 
      "price": 5.95, 
      image: ppSandwich
    },
    {
      title: "PULLED PORK SANDWICH DOUBLE MEAT", 
      "type": "Meals", 
      "description": "Served on sandwich buns and topped with some fresh coleslaw with double the amount of meat", 
      "price": 6.95, 
      image: largePPSandwich
    },
    {
      title: "KID'S MEAL", 
      "type": "Meals", 
      "description": "Perfect meal for kids consisting of either one rib or one chicken drumstick. Includes one roll, a fruit snack, a juice box, and half a corn", 
      "price": 8.95, 
      image: kidsmeal
    },
  ];


  export const sideItems = [
    {
      title: "WHOLE CORN ON THE COB", 
      "type": "Meals", 
      "description": "STEAMED CORN ON THE TOPPED WITH BUTTER AND SALT", 
      "price": 3.50, 
      image: corn
    },
    {
      title: "BAKED BEANS", 
      "type": "Meals", 
      "description": "12oz of baked beans", 
      "price": 3.50, 
      image: beans
    },
    {
      title: "COLESLAW", 
      "type": "Meals", 
      "description": "12oz of coleslaw", 
      "price": 3.50, 
      image: coleslaw
    },
    {
      title: "POTATO SALAD", 
      "type": "Meals", 
      "description": "12oz of potato salad", 
      "price": 3.50, 
      image: potato
    },

    {
      title: "CHICKEN QUARTER", 
      "type": "Meals", 
      "description": "Chicken Thigh and Drumstick together", 
      "price": 6.50, 
      image: chkQuarter
    },
    {
      title: "CHICKEN THIGH", 
      "type": "Meals", 
      "description": "Barbeque Chicken Thigh.", 
      "price": 3.95, 
      image: thigh
    },
    {
      title: "CHICKEN DRUMSTICK", 
      "type": "Meals", 
      "description": "Barbeque Chicken Drumstick", 
      "price": 2.95, 
      image: leg
    },
    {
      title: "INDIVIDUAL RIB", 
      "type": "Meals", 
      "description": "One individual rib", 
      "price": 2.95, 
      image: rib
    },
    {
      title: "CORNBREAD", 
      "type": "Meals", 
      "description": "cornbread", 
      "price": 3.50, 
      image: cornbread
    },
  ];

  export const drinkItems = [
    {
      title: "SODA", 
      "type": "Meals", 
      "description": "test", 
      "price": 1.50, 
      image: soda
    },
    {
      title: "BOTTLED WATER", 
      "type": "Meals", 
      "description": "test", 
      "price": 1.00, 
      image: water
    },
    {
      title: "BEER", 
      "type": "Meals", 
      "description": "test", 
      "price": 3.50, 
      image: beer
    },
  ];