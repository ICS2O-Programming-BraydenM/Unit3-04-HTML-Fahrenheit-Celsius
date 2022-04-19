// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates degrees in Celsius from degrees in Fahrenheit
 */
function calcDegrees() {
  // get user input
  let fahrenheit = document.getElementById("degrees").value
  let celsius = 5 / 9 (fahrenheit - 32)

  // display the results
  document.getElementById("display-results").innerHTML = "The degrees in Celsius would be " + celsius.toFixed(2) + "m<sup>°</sup>"
}