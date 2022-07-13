<script lang="ts">
  import { replace, link } from "svelte-spa-router";
  import { loggedIn, onboard } from "../store";

  function login(): void {
    if (!$loggedIn) {
      loggedIn.update((): boolean => true)
    }

    checkLogin();
  }

  function checkLogin(): void {
    if ($loggedIn) {
      if ($onboard) {
        replace("/account-instellen")
      } else {
        replace("/")
      }
    }
  }

  checkLogin();
</script>

<div>
  <svg class="sun" xmlns="http://www.w3.org/2000/svg" width="283.449" height="238.5" viewBox="0 0 283.449 238.5" >
    <g id="Group_3" data-name="Group 3" transform="translate(-3.275 -23.5)">
      <g id="Group_1" data-name="Group 1" class="rays">
        <line id="Line_1" data-name="Line 1" y1="75" transform="translate(146.5 23.5)" fill="none" stroke="#9b9188" stroke-width="1"/>
        <line id="Line_1-2" data-name="Line 1" y1="75" transform="translate(254.978 68.894) rotate(45)" fill="none" stroke="#9b9188" stroke-width="1"/>
        <line id="Line_1-3" data-name="Line 1" y1="75" transform="translate(204.565 35.878) rotate(22.5)" fill="none" stroke="#9b9188" stroke-width="1"/>
        <line id="Line_3" data-name="Line 3" y1="75" transform="translate(72.758 146.346) rotate(112.5)" fill="none" stroke="#9b9188" stroke-width="1"/>
        <line id="Line_1-4" data-name="Line 1" y1="75" transform="translate(88.206 34.73) rotate(-22.5)" fill="none" stroke="#9b9188" stroke-width="1"/>
        <line id="Line_2" data-name="Line 2" y1="75" transform="translate(286.533 117.645) rotate(67.5)" fill="none" stroke="#9b9188" stroke-width="1"/>
        <line id="Line_1-5" data-name="Line 1" y1="55" transform="translate(161.715 99.817) rotate(-168.75)" fill="none" stroke="#9b9188" stroke-width="1"/>
        <line id="Line_1-6" data-name="Line 1" y1="55" transform="translate(131.227 99.231) rotate(168.75)" fill="none" stroke="#9b9188" stroke-width="1"/>
        <line id="Line_2-2" data-name="Line 2" y1="55" transform="translate(221.377 160.318) rotate(-101.25)" fill="none" stroke="#9b9188" stroke-width="1"/>
        <line id="Line_1-7" data-name="Line 1" y1="55" transform="translate(189.942 112.544) rotate(-146.25)" fill="none" stroke="#9b9188" stroke-width="1"/>
        <line id="Line_3-2" data-name="Line 3" y1="55" transform="translate(80.783 132.815) rotate(123.75)" fill="none" stroke="#9b9188" stroke-width="1"/>
        <line id="Line_1-8" data-name="Line 1" y1="55" transform="translate(102.553 110.877) rotate(146.25)" fill="none" stroke="#9b9188" stroke-width="1"/>
        <line id="Line_2-3" data-name="Line 2" y1="55" transform="translate(209.217 132.815) rotate(-123.75)" fill="none" stroke="#9b9188" stroke-width="1"/>
        <line id="Line_4" data-name="Line 4" y1="75" transform="translate(90.929 120.513) rotate(135)" fill="none" stroke="#9b9188" stroke-width="1"/>
      </g>
      <g id="Group_2" data-name="Group 2">
        <circle id="Ellipse_4" data-name="Ellipse 4" cx="6" cy="6" r="6" transform="translate(73 101)" fill="#fefae2"/>
        <circle id="Ellipse_5" data-name="Ellipse 5" cx="6" cy="6" r="6" transform="translate(141 44)" fill="#fefae2"/>
        <circle id="Ellipse_6" data-name="Ellipse 6" cx="6" cy="6" r="6" transform="translate(141 80)" fill="#fefae2"/>
        <circle id="Ellipse_7" data-name="Ellipse 7" cx="10" cy="10" r="10" transform="translate(75 70)" fill="#fefae2"/>
        <circle id="Ellipse_8" data-name="Ellipse 8" cx="10" cy="10" r="10" transform="translate(156 72)" fill="#fefae2"/>
        <circle id="Ellipse_9" data-name="Ellipse 9" cx="10" cy="10" r="10" transform="translate(186 43)" fill="#fefae2"/>
        <circle id="Ellipse_10" data-name="Ellipse 10" cx="6" cy="6" r="6" transform="translate(174 88)" fill="#fefae2"/>
        <circle id="Ellipse_11" data-name="Ellipse 11" cx="6" cy="6" r="6" transform="translate(95 60)" fill="#fefae2"/>
        <circle id="Ellipse_12" data-name="Ellipse 12" cx="6" cy="6" r="6" transform="translate(104 80)" fill="#fefae2"/>
        <circle id="Ellipse_13" data-name="Ellipse 13" cx="6" cy="6" r="6" transform="translate(220 93)" fill="#fefae2"/>
        <circle id="Ellipse_14" data-name="Ellipse 14" cx="6" cy="6" r="6" transform="translate(215 120)" fill="#fefae2"/>
        <circle id="Ellipse_15" data-name="Ellipse 15" cx="6" cy="6" r="6" transform="translate(252 146)" fill="#fefae2"/>
        <circle id="Ellipse_16" data-name="Ellipse 16" cx="10" cy="10" r="10" transform="translate(40 126)" fill="#fefae2"/>
      </g>
      <circle id="Ellipse_1" data-name="Ellipse 1" cx="78" cy="78" r="78" transform="translate(67 106)" fill="#eeb155"/>
    </g>
  </svg>
  <svg class="sand-dark" xmlns="http://www.w3.org/2000/svg" width="532.048" height="479.76" viewBox="0 0 532.048 479.76">
    <path id="Path_2" data-name="Path 2" d="M73.091,31.114c50.454-.281,104.6.428,171.737,46.017s107.36,21,205.205,54.985c.841.351-64.569,275.064-64.569,275.064L0,303.895Z" transform="matrix(0.966, -0.259, 0.259, 0.966, -8.045, 86.455)" fill="#e6e4aa"/>
  </svg>
  <svg class="sand-light" xmlns="http://www.w3.org/2000/svg" width="588.141" height="608.958" viewBox="0 0 588.141 608.958">
    <path id="Path_1" data-name="Path 1" d="M376.824-569.081c95.488,19.867,102.537,64.727,200.588,78.825,96.481,13.873,118.02,41.889,184.143,69.49.841.351-80.144,355.118-80.144,355.118L287.568-163.415Z" transform="matrix(0.966, -0.259, 0.259, 0.966, -130.481, 746.797)" fill="#fbf0bc"/>
  </svg>
  <svg class="pond" xmlns="http://www.w3.org/2000/svg" width="250.716" height="181.201" viewBox="0 0 250.716 181.201">
    <g id="Group_769" data-name="Group 769" transform="translate(-32.408 -143.43)">
      <g id="pond">
        <path id="Path_12" data-name="Path 12" d="M496.035-552.555c25.774-7.611,97.932-19.586,128.325,4.728s4.728,29.717,0,31.744-47.278,33.77-108.739,13.508S470.261-544.944,496.035-552.555Z" transform="translate(-395.752 820.475)" fill="#45ae65"/>
        <g id="Group_81" data-name="Group 81">
          <g id="Group_5" data-name="Group 5">
            <path id="Path_6" data-name="Path 6" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-390 805)" fill="#2c7e23"/>
            <path id="Path_7" data-name="Path 7" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-392 806)" fill="#2c7e23"/>
          </g>
          <g id="Group_4" data-name="Group 4" transform="translate(0 1.552)">
            <path id="Path_8" data-name="Path 8" d="M490.661-536.322a8.468,8.468,0,0,1,2.414-.779s1.235-7.456,1.882-10.2C494.369-550.1,490.9-538.913,490.661-536.322Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9" data-name="Path 9" d="M494.313-537.547a6.266,6.266,0,0,0-1.77.341s-1.235-7.386-1.882-10.1C491.249-550.081,494.075-540.114,494.313-537.547Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_6" data-name="Group 6" transform="translate(4 -1)">
            <path id="Path_8-2" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-2" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_7" data-name="Group 7" transform="translate(9 0.328)">
            <path id="Path_8-3" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-3" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_8" data-name="Group 8" transform="translate(4 -1)">
            <path id="Path_8-4" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-4" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_10" data-name="Group 10" transform="translate(13 -3)">
            <path id="Path_8-5" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-5" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_13" data-name="Group 13">
            <path id="Path_6-2" data-name="Path 6" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-390 805)" fill="#2c7e23"/>
            <path id="Path_7-2" data-name="Path 7" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-392 806)" fill="#2c7e23"/>
          </g>
          <g id="Group_14" data-name="Group 14" transform="translate(0 1.552)">
            <path id="Path_8-6" data-name="Path 8" d="M490.661-536.322a8.468,8.468,0,0,1,2.414-.779s1.235-7.456,1.882-10.2C494.369-550.1,490.9-538.913,490.661-536.322Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-6" data-name="Path 9" d="M494.313-537.547a6.266,6.266,0,0,0-1.77.341s-1.235-7.386-1.882-10.1C491.249-550.081,494.075-540.114,494.313-537.547Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_15" data-name="Group 15" transform="translate(4 -1)">
            <path id="Path_8-7" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-7" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_16" data-name="Group 16" transform="translate(17 -0.672)">
            <path id="Path_8-8" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-8" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_17" data-name="Group 17" transform="translate(4 -1)">
            <path id="Path_8-9" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-9" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_22" data-name="Group 22" transform="translate(70.423 -18.579) rotate(8)">
            <path id="Path_6-3" data-name="Path 6" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-390 805)" fill="#2c7e23"/>
            <path id="Path_7-3" data-name="Path 7" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-392 806)" fill="#2c7e23"/>
          </g>
          <g id="Group_24" data-name="Group 24" transform="translate(74.524 -19.013) rotate(8)">
            <path id="Path_8-10" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-10" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_27" data-name="Group 27" transform="translate(86.5 -18.008) rotate(8)">
            <path id="Path_8-11" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-11" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_32" data-name="Group 32" transform="translate(151.729 -27.523) rotate(18)">
            <path id="Path_8-12" data-name="Path 8" d="M490.661-536.322a8.468,8.468,0,0,1,2.414-.779s1.235-7.456,1.882-10.2C494.369-550.1,490.9-538.913,490.661-536.322Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-12" data-name="Path 9" d="M494.313-537.547a6.266,6.266,0,0,0-1.77.341s-1.235-7.386-1.882-10.1C491.249-550.081,494.075-540.114,494.313-537.547Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_33" data-name="Group 33" transform="translate(180.322 -26.714) rotate(18)">
            <path id="Path_8-13" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-13" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_37" data-name="Group 37" transform="translate(164.549 -28.144) rotate(18)">
            <path id="Path_8-14" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-14" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_38" data-name="Group 38" transform="translate(176.033 -25.108) rotate(18)">
            <path id="Path_8-15" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-15" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_40" data-name="Group 40" transform="translate(180.322 -26.714) rotate(18)">
            <path id="Path_8-16" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-16" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_46" data-name="Group 46" transform="translate(221.322 -1.714) rotate(18)">
            <path id="Path_8-17" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-17" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_48" data-name="Group 48" transform="translate(188.322 -24.714) rotate(18)">
            <path id="Path_8-18" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-18" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_49" data-name="Group 49" transform="translate(197.942 -18.644) rotate(18)">
            <path id="Path_8-19" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-19" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_50" data-name="Group 50" transform="translate(194.549 -22.144) rotate(18)">
            <path id="Path_8-20" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-20" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_51" data-name="Group 51" transform="translate(209.033 -12.108) rotate(18)">
            <path id="Path_8-21" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-21" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_52" data-name="Group 52" transform="translate(220.775 -3.574) rotate(18)">
            <path id="Path_8-22" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-22" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_53" data-name="Group 53" transform="translate(222.322 2.286) rotate(18)">
            <path id="Path_8-23" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-23" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_54" data-name="Group 54" transform="translate(201.942 -15.644) rotate(18)">
            <path id="Path_8-24" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-24" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_55" data-name="Group 55" transform="translate(212.549 -11.144) rotate(18)">
            <path id="Path_8-25" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-25" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_56" data-name="Group 56" transform="translate(216.033 -5.108) rotate(18)">
            <path id="Path_8-26" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-26" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_57" data-name="Group 57" transform="translate(206.775 -15.574) rotate(18)">
            <path id="Path_8-27" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-27" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_58" data-name="Group 58" transform="translate(214.549 -9.144) rotate(18)">
            <path id="Path_8-28" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-28" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_59" data-name="Group 59" transform="translate(218.549 -5.144) rotate(18)">
            <path id="Path_8-29" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-29" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_60" data-name="Group 60" transform="translate(201.549 -19.144) rotate(18)">
            <path id="Path_8-30" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-30" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_67" data-name="Group 67" transform="translate(-27 18.328)">
            <path id="Path_8-31" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-31" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_68" data-name="Group 68" transform="translate(-24 12)">
            <path id="Path_8-32" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-32" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_75" data-name="Group 75" transform="translate(16.423 1.421) rotate(8)">
            <path id="Path_6-4" data-name="Path 6" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-390 805)" fill="#2c7e23"/>
            <path id="Path_7-4" data-name="Path 7" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-392 806)" fill="#2c7e23"/>
          </g>
          <g id="Group_76" data-name="Group 76" transform="translate(15.207 -0.043) rotate(8)">
            <path id="Path_8-33" data-name="Path 8" d="M490.661-536.322a8.468,8.468,0,0,1,2.414-.779s1.235-7.456,1.882-10.2C494.369-550.1,490.9-538.913,490.661-536.322Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-33" data-name="Path 9" d="M494.313-537.547a6.266,6.266,0,0,0-1.77.341s-1.235-7.386-1.882-10.1C491.249-550.081,494.075-540.114,494.313-537.547Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_77" data-name="Group 77" transform="translate(17.524 -4.013) rotate(8)">
            <path id="Path_8-34" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-34" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_78" data-name="Group 78" transform="translate(25.3 -6.141) rotate(8)">
            <path id="Path_8-35" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-35" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_79" data-name="Group 79" transform="translate(21.524 -6.013) rotate(8)">
            <path id="Path_8-36" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-36" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_80" data-name="Group 80" transform="translate(29.724 -9.88) rotate(8)">
            <path id="Path_8-37" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-37" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
        </g>
        <path id="Path_11" data-name="Path 11" d="M494.744-553.062c30.12-7.69,92.925-18.585,121.763,4.486s4.486,28.2,0,30.12-44.86,32.043-103.179,12.817S464.624-545.372,494.744-553.062Z" transform="translate(-391 822)" fill="#b3cecb"/>
        <g id="Group_124" data-name="Group 124" transform="translate(0 -1)">
          <g id="Group_61" data-name="Group 61" transform="translate(84.21 288.254)">
            <path id="Path_6-5" data-name="Path 6" d="M494.957-534.77a7.735,7.735,0,0,0-2.414-.884s-1.235-8.469-1.882-11.586C491.249-550.416,494.719-537.713,494.957-534.77Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_7-5" data-name="Path 7" d="M490.661-536.045a5.594,5.594,0,0,1,1.77.391s1.235-8.469,1.882-11.586C493.725-550.416,490.9-538.988,490.661-536.045Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_62" data-name="Group 62" transform="translate(90.21 292.254)">
            <path id="Path_8-38" data-name="Path 8" d="M494.957-534.77a7.735,7.735,0,0,0-2.414-.884s-1.235-8.469-1.882-11.586C491.249-550.416,494.719-537.713,494.957-534.77Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-38" data-name="Path 9" d="M490.661-536.045a5.594,5.594,0,0,1,1.77.391s1.235-8.469,1.882-11.586C493.725-550.416,490.9-538.988,490.661-536.045Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_63" data-name="Group 63" transform="translate(91.21 294.582)">
            <path id="Path_8-39" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-488.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-39" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-490.661 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_64" data-name="Group 64" transform="translate(94.21 294.254)">
            <path id="Path_8-40" data-name="Path 8" d="M494.957-534.77a7.735,7.735,0,0,0-2.414-.884s-1.235-8.469-1.882-11.586C491.249-550.416,494.719-537.713,494.957-534.77Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-40" data-name="Path 9" d="M490.661-536.045a5.594,5.594,0,0,1,1.77.391s1.235-8.469,1.882-11.586C493.725-550.416,490.9-538.988,490.661-536.045Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_65" data-name="Group 65" transform="translate(-25 25.328)">
            <path id="Path_8-41" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-41" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_66" data-name="Group 66" transform="translate(-22 28)">
            <path id="Path_8-42" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-42" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_69" data-name="Group 69" transform="translate(87.21 290.254)">
            <path id="Path_6-6" data-name="Path 6" d="M494.957-534.77a7.735,7.735,0,0,0-2.414-.884s-1.235-8.469-1.882-11.586C491.249-550.416,494.719-537.713,494.957-534.77Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_7-6" data-name="Path 7" d="M490.661-536.045a5.594,5.594,0,0,1,1.77.391s1.235-8.469,1.882-11.586C493.725-550.416,490.9-538.988,490.661-536.045Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_70" data-name="Group 70" transform="translate(97.21 296.254)">
            <path id="Path_8-43" data-name="Path 8" d="M494.957-534.77a7.735,7.735,0,0,0-2.414-.884s-1.235-8.469-1.882-11.586C491.249-550.416,494.719-537.713,494.957-534.77Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-43" data-name="Path 9" d="M490.661-536.045a5.594,5.594,0,0,1,1.77.391s1.235-8.469,1.882-11.586C493.725-550.416,490.9-538.988,490.661-536.045Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_71" data-name="Group 71" transform="translate(-20 32.328)">
            <path id="Path_8-44" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-44" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_72" data-name="Group 72" transform="translate(100.21 297.254)">
            <path id="Path_8-45" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-488.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-45" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-490.661 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_73" data-name="Group 73" transform="translate(-26 22.328)">
            <path id="Path_8-46" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-46" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_74" data-name="Group 74" transform="translate(-24 25)">
            <path id="Path_8-47" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-386 804)" fill="#2c7e23"/>
            <path id="Path_9-47" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-388 805)" fill="#2c7e23"/>
          </g>
          <g id="Group_84" data-name="Group 84" transform="translate(111.661 305.582)">
            <path id="Path_8-48" data-name="Path 8" d="M494.957-537.1a8.93,8.93,0,0,0-2.414-.726s-1.235-6.949-1.882-9.507C491.249-549.937,494.719-539.513,494.957-537.1Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-48" data-name="Path 9" d="M490.661-538.3a6.7,6.7,0,0,1,1.77.316s1.235-6.844,1.882-9.364C493.725-549.913,490.9-540.677,490.661-538.3Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_85" data-name="Group 85" transform="translate(108.661 301.254)">
            <path id="Path_8-49" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-488.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-49" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-490.661 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_87" data-name="Group 87" transform="translate(127.21 308.254)">
            <path id="Path_8-50" data-name="Path 8" d="M494.957-534.77a7.735,7.735,0,0,0-2.414-.884s-1.235-8.469-1.882-11.586C491.249-550.416,494.719-537.713,494.957-534.77Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-50" data-name="Path 9" d="M490.661-536.045a5.594,5.594,0,0,1,1.77.391s1.235-8.469,1.882-11.586C493.725-550.416,490.9-538.988,490.661-536.045Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_88" data-name="Group 88" transform="translate(119.661 305.254)">
            <path id="Path_6-7" data-name="Path 6" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-488.661 547.746)" fill="#2c7e23"/>
            <path id="Path_7-7" data-name="Path 7" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-490.661 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_89" data-name="Group 89" transform="translate(105.661 300.254)">
            <path id="Path_8-51" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-488.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-51" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-490.661 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_91" data-name="Group 91" transform="translate(102.661 298.254)">
            <path id="Path_8-52" data-name="Path 8" d="M494.957-534.77a7.735,7.735,0,0,0-2.414-.884s-1.235-8.469-1.882-11.586C491.249-550.416,494.719-537.713,494.957-534.77Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-52" data-name="Path 9" d="M490.661-536.045a5.594,5.594,0,0,1,1.77.391s1.235-8.469,1.882-11.586C493.725-550.416,490.9-538.988,490.661-536.045Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_101" data-name="Group 101" transform="translate(237.045 286.039) rotate(7)">
            <path id="Path_6-8" data-name="Path 6" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-488.661 547.746)" fill="#2c7e23"/>
            <path id="Path_7-8" data-name="Path 7" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-490.661 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_102" data-name="Group 102" transform="translate(225.603 291.278) rotate(7)">
            <path id="Path_8-53" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-488.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-53" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-490.661 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_103" data-name="Group 103" transform="translate(229.326 291.467) rotate(7)">
            <path id="Path_8-54" data-name="Path 8" d="M494.957-537.1a8.93,8.93,0,0,0-2.414-.726s-1.235-6.949-1.882-9.507C491.249-549.937,494.719-539.513,494.957-537.1Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-54" data-name="Path 9" d="M490.661-538.3a6.7,6.7,0,0,1,1.77.316s1.235-6.844,1.882-9.364C493.725-549.913,490.9-540.677,490.661-538.3Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_104" data-name="Group 104" transform="translate(221.389 293.776) rotate(7)">
            <path id="Path_8-55" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-488.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-55" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-490.661 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_106" data-name="Group 106" transform="translate(240.055 281.501) rotate(7)">
            <path id="Path_8-56" data-name="Path 8" d="M494.957-534.77a7.735,7.735,0,0,0-2.414-.884s-1.235-8.469-1.882-11.586C491.249-550.416,494.719-537.713,494.957-534.77Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-56" data-name="Path 9" d="M490.661-536.045a5.594,5.594,0,0,1,1.77.391s1.235-8.469,1.882-11.586C493.725-550.416,490.9-538.988,490.661-536.045Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_107" data-name="Group 107" transform="translate(233.824 287.659) rotate(7)">
            <path id="Path_6-9" data-name="Path 6" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-488.661 547.746)" fill="#2c7e23"/>
            <path id="Path_7-9" data-name="Path 7" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-490.661 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_108" data-name="Group 108" transform="translate(217.167 296.395) rotate(7)">
            <path id="Path_8-57" data-name="Path 8" d="M490.661-534.77a7.735,7.735,0,0,1,2.414-.884s1.235-8.469,1.882-11.586C494.369-550.416,490.9-537.713,490.661-534.77Z" transform="translate(-488.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-57" data-name="Path 9" d="M494.313-536.045a5.594,5.594,0,0,0-1.77.391s-1.235-8.469-1.882-11.586C491.249-550.416,494.075-538.988,494.313-536.045Z" transform="translate(-490.661 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_109" data-name="Group 109" transform="translate(238.543 285.554) rotate(7)">
            <path id="Path_8-58" data-name="Path 8" d="M494.957-537.1a8.93,8.93,0,0,0-2.414-.726s-1.235-6.949-1.882-9.507C491.249-549.937,494.719-539.513,494.957-537.1Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-58" data-name="Path 9" d="M490.661-538.3a6.7,6.7,0,0,1,1.77.316s1.235-6.844,1.882-9.364C493.725-549.913,490.9-540.677,490.661-538.3Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_110" data-name="Group 110" transform="translate(213.068 298.022) rotate(7)">
            <path id="Path_8-59" data-name="Path 8" d="M494.957-534.77a7.735,7.735,0,0,0-2.414-.884s-1.235-8.469-1.882-11.586C491.249-550.416,494.719-537.713,494.957-534.77Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-59" data-name="Path 9" d="M490.661-536.045a5.594,5.594,0,0,1,1.77.391s1.235-8.469,1.882-11.586C493.725-550.416,490.9-538.988,490.661-536.045Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_114" data-name="Group 114" transform="translate(187.879 307.087) rotate(7)">
            <path id="Path_8-60" data-name="Path 8" d="M494.957-534.77a7.735,7.735,0,0,0-2.414-.884s-1.235-8.469-1.882-11.586C491.249-550.416,494.719-537.713,494.957-534.77Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-60" data-name="Path 9" d="M490.661-536.045a5.594,5.594,0,0,1,1.77.391s1.235-8.469,1.882-11.586C493.725-550.416,490.9-538.988,490.661-536.045Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_115" data-name="Group 115" transform="translate(191.687 308.893) rotate(7)">
            <path id="Path_8-61" data-name="Path 8" d="M490.661-537.1a8.93,8.93,0,0,1,2.414-.726s1.235-6.949,1.882-9.507C494.369-549.937,490.9-539.513,490.661-537.1Z" transform="translate(-488.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-61" data-name="Path 9" d="M494.313-538.3a6.7,6.7,0,0,0-1.77.316s-1.235-6.844-1.882-9.364C491.249-549.913,494.075-540.677,494.313-538.3Z" transform="translate(-490.661 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_116" data-name="Group 116" transform="translate(197.192 304.962) rotate(7)">
            <path id="Path_8-62" data-name="Path 8" d="M494.957-534.77a7.735,7.735,0,0,0-2.414-.884s-1.235-8.469-1.882-11.586C491.249-550.416,494.719-537.713,494.957-534.77Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-62" data-name="Path 9" d="M490.661-536.045a5.594,5.594,0,0,1,1.77.391s1.235-8.469,1.882-11.586C493.725-550.416,490.9-538.988,490.661-536.045Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
          <g id="Group_120" data-name="Group 120" transform="translate(202.292 303.335) rotate(7)">
            <path id="Path_8-63" data-name="Path 8" d="M494.957-534.77a7.735,7.735,0,0,0-2.414-.884s-1.235-8.469-1.882-11.586C491.249-550.416,494.719-537.713,494.957-534.77Z" transform="translate(-490.661 547.746)" fill="#2c7e23"/>
            <path id="Path_9-63" data-name="Path 9" d="M490.661-536.045a5.594,5.594,0,0,1,1.77.391s1.235-8.469,1.882-11.586C493.725-550.416,490.9-538.988,490.661-536.045Z" transform="translate(-488.017 548.746)" fill="#2c7e23"/>
          </g>
        </g>
      </g>
      <g id="Group_100" data-name="Group 100">
        <g id="Group_99" data-name="Group 99" transform="translate(114.408 167.531)">
          <path id="Path_13" data-name="Path 13" d="M429.563-550.076h6.3s2.567-40.106,9.357-52.217,4.973-15.168-4.127,0S429.563-550.076,429.563-550.076Z" transform="translate(-419.88 632.798)" fill="#6ed27b"/>
          <g id="Group_129" data-name="Group 129">
            <path id="Path_15" data-name="Path 15" d="M638.137-581.554a30.471,30.471,0,0,1,6.332,8.764,24.224,24.224,0,0,1,2.234,14.556c-2.235,13.781,8.008-5.959,4.656-14.525S638.137-581.554,638.137-581.554Z" transform="translate(-609.398 600.636)" fill="#1a6108"/>
            <path id="Path_16" data-name="Path 16" d="M0,24.778S12.952,10.982,15.336,2.86s7.055,2.861.108,10.484A52.63,52.63,0,0,1,0,24.778Z" transform="translate(15.831 39.941) rotate(-146)" fill="#1a6108"/>
            <path id="Path_17" data-name="Path 17" d="M13.9,28.07A30.472,30.472,0,0,1,7.57,19.306,24.223,24.223,0,0,1,5.336,4.75C7.571-9.031-2.672,10.709.68,19.275S13.9,28.07,13.9,28.07Z" transform="translate(26.202 15.719) rotate(45)" fill="#1a6108"/>
            <path id="Path_18" data-name="Path 18" d="M0,0S12.952,13.8,15.336,21.918s7.055-2.861.108-10.484A52.629,52.629,0,0,0,0,0Z" transform="matrix(0.602, -0.799, 0.799, 0.602, 27.346, 20.236)" fill="#1a6108"/>
            <path id="Path_19" data-name="Path 19" d="M669.085-585.452s3.342-13.994-8.338-18.182-8.815,2.865-1.984,5.73S669.085-585.452,669.085-585.452Z" transform="translate(-639.398 604.93)" fill="#1a6108"/>
            <path id="Path_20" data-name="Path 20" d="M.443,0S-2.9,13.994,8.781,18.182s8.815-2.865,1.983-5.73S.443,0,.443,0Z" transform="translate(30.17 19.501) rotate(140)" fill="#1a6108"/>
            <path id="Path_21" data-name="Path 21" d="M.443,19.478S-2.9,5.483,8.781,1.3s8.815,2.865,1.983,5.73S.443,19.478.443,19.478Z" transform="matrix(-0.883, 0.469, -0.469, -0.883, 38.84, 36.586)" fill="#1a6108"/>
            <path id="Path_22" data-name="Path 22" d="M.443,19.478S-2.9,5.483,8.781,1.3s8.815,2.865,1.983,5.73S.443,19.478.443,19.478Z" transform="matrix(0.985, 0.174, -0.174, 0.985, 32.285, 1.255)" fill="#1a6108"/>
          </g>
        </g>
        <g id="Group_98" data-name="Group 98" transform="translate(164.358 161.025)">
          <path id="Path_13-2" data-name="Path 13" d="M450.964-544.881h-6.821s-2.78-43.441-10.135-56.558-5.387-16.429,4.471,0S450.964-544.881,450.964-544.881Z" transform="translate(-397.952 634.481)" fill="#6ed27b"/>
          <g id="Group_128" data-name="Group 128">
            <path id="Path_15-2" data-name="Path 15" d="M653.195-581.554a33.005,33.005,0,0,0-6.858,9.493,26.238,26.238,0,0,0-2.42,15.766c2.421,14.926-8.673-6.455-5.043-15.733S653.195-581.554,653.195-581.554Z" transform="translate(-620.823 602.223)" fill="#1a6108"/>
            <path id="Path_16-2" data-name="Path 16" d="M0,0S14.029,14.943,16.611,23.74s7.642-3.1.117-11.356A57.005,57.005,0,0,0,0,0Z" transform="translate(31.346 21.012) rotate(-34)" fill="#1a6108"/>
            <path id="Path_17-2" data-name="Path 17" d="M15.058,0A33,33,0,0,0,8.2,9.493a26.237,26.237,0,0,0-2.42,15.766C8.2,40.185-2.894,18.8.737,9.526S15.058,0,15.058,0Z" transform="translate(56.619 38.525) rotate(135)" fill="#1a6108"/>
            <path id="Path_18-2" data-name="Path 18" d="M0,26.838S14.029,11.9,16.611,3.1s7.642,3.1.117,11.356A57,57,0,0,1,0,26.838Z" transform="matrix(-0.602, -0.799, 0.799, -0.602, 12.447, 38.07)" fill="#1a6108"/>
            <path id="Path_19-2" data-name="Path 19" d="M653.288-583.833s-3.62-15.158,9.032-19.693,9.548,3.1,2.148,6.206S653.288-583.833,653.288-583.833Z" transform="translate(-621.942 604.93)" fill="#1a6108"/>
            <path id="Path_20-2" data-name="Path 20" d="M.48,21.1S-3.14,5.939,9.511,1.4s9.548,3.1,2.148,6.206S.48,21.1.48,21.1Z" transform="translate(44.383 4.961) rotate(40)" fill="#1a6108"/>
            <path id="Path_21-2" data-name="Path 21" d="M.48,0S-3.14,15.158,9.511,19.693s9.548-3.1,2.148-6.206S.48,0,.48,0Z" transform="matrix(0.883, 0.469, -0.469, 0.883, 31.336, 21.001)" fill="#1a6108"/>
            <path id="Path_22-2" data-name="Path 22" d="M.48,0S-3.14,15.158,9.511,19.693s9.548-3.1,2.148-6.206S.48,0,.48,0Z" transform="matrix(-0.985, 0.174, -0.174, -0.985, 32.195, 22.136)" fill="#1a6108"/>
          </g>
        </g>
        <g id="Group_96" data-name="Group 96" transform="translate(196.408 155.396)">
          <path id="Path_13-3" data-name="Path 13" d="M457-525.8h-8.744s-3.564-55.686-12.992-72.5-6.905-21.06,5.731,0S457-525.8,457-525.8Z" transform="translate(-389.04 640.662)" fill="#6ed27b"/>
          <g id="Group_131" data-name="Group 131">
            <path id="Path_15-3" data-name="Path 15" d="M657.44-581.554a42.309,42.309,0,0,0-8.792,12.169,33.634,33.634,0,0,0-3.1,20.21c3.1,19.134-11.118-8.274-6.464-20.168S657.44-581.554,657.44-581.554Z" transform="translate(-615.942 608.049)" fill="#1a6108"/>
            <path id="Path_16-3" data-name="Path 16" d="M0,0S17.984,19.155,21.293,30.433s9.8-3.973.15-14.557A73.075,73.075,0,0,0,0,0Z" transform="translate(40.182 26.935) rotate(-34)" fill="#1a6108"/>
            <path id="Path_17-3" data-name="Path 17" d="M19.3,0a42.309,42.309,0,0,0-8.791,12.169,33.634,33.634,0,0,0-3.1,20.21C10.511,51.513-3.71,24.105.945,12.211S19.3,0,19.3,0Z" transform="translate(72.58 49.385) rotate(135)" fill="#1a6108"/>
            <path id="Path_18-3" data-name="Path 18" d="M0,34.4S17.984,15.248,21.293,3.971s9.8,3.973.15,14.557A73.074,73.074,0,0,1,0,34.4Z" transform="matrix(-0.602, -0.799, 0.799, -0.602, 15.956, 48.802)" fill="#1a6108"/>
            <path id="Path_19-3" data-name="Path 19" d="M653.423-577.886S648.783-597.317,665-603.13s12.24,3.978,2.754,7.956S653.423-577.886,653.423-577.886Z" transform="translate(-613.241 604.93)" fill="#1a6108"/>
            <path id="Path_20-3" data-name="Path 20" d="M.615,27.044S-4.026,7.613,12.192,1.8s12.24,3.978,2.754,7.956S.615,27.044.615,27.044Z" transform="translate(56.895 6.36) rotate(40)" fill="#1a6108"/>
            <path id="Path_21-3" data-name="Path 21" d="M.615,0s-4.64,19.431,11.577,25.245,12.24-3.978,2.754-7.956S.615,0,.615,0Z" transform="matrix(0.883, 0.469, -0.469, 0.883, 40.169, 26.921)" fill="#1a6108"/>
            <path id="Path_22-3" data-name="Path 22" d="M.615,0s-4.64,19.431,11.577,25.245,12.24-3.978,2.754-7.956S.615,0,.615,0Z" transform="matrix(-0.985, 0.174, -0.174, -0.985, 41.27, 28.375)" fill="#1a6108"/>
          </g>
        </g>
        <g id="Group_93" data-name="Group 93" transform="translate(-27 -2)">
          <path id="Path_13-4" data-name="Path 13" d="M460.809-513.746H450.85s-4.059-63.427-14.8-82.58-7.865-23.987,6.527,0S460.809-513.746,460.809-513.746Z" transform="translate(-166 835)" fill="#6ed27b"/>
          <g id="Group_130" data-name="Group 130">
            <path id="Path_15-4" data-name="Path 15" d="M660.123-581.554a48.19,48.19,0,0,0-10.013,13.86,38.309,38.309,0,0,0-3.534,23.02c3.534,21.794-12.664-9.424-7.363-22.972S660.123-581.554,660.123-581.554Z" transform="translate(-395.449 802.163)" fill="#1a6108"/>
            <path id="Path_16-4" data-name="Path 16" d="M0,0S20.483,21.818,24.253,34.663s11.158-4.525.171-16.581A83.232,83.232,0,0,0,0,0Z" transform="translate(263.175 221.109) rotate(-34)" fill="#1a6108"/>
            <path id="Path_17-4" data-name="Path 17" d="M21.986,0A48.19,48.19,0,0,0,11.972,13.86,38.309,38.309,0,0,0,8.438,36.88c3.534,21.794-12.664-9.424-7.363-22.972S21.986,0,21.986,0Z" transform="translate(300.076 246.68) rotate(135)" fill="#1a6108"/>
            <path id="Path_18-4" data-name="Path 18" d="M0,39.186S20.483,17.368,24.253,4.523s11.158,4.525.171,16.581A83.231,83.231,0,0,1,0,39.186Z" transform="translate(235.582 246.016) rotate(-127)" fill="#1a6108"/>
            <path id="Path_19-4" data-name="Path 19" d="M653.509-574.127s-5.285-22.132,13.187-28.754,13.941,4.531,3.137,9.062S653.509-574.127,653.509-574.127Z" transform="translate(-390.334 795.36)" fill="#1a6108"/>
            <path id="Path_20-4" data-name="Path 20" d="M.7,30.8S-4.585,8.671,13.887,2.049s13.941,4.531,3.137,9.062S.7,30.8.7,30.8Z" transform="matrix(0.766, 0.643, -0.643, 0.766, 282.211, 197.674)" fill="#1a6108"/>
            <path id="Path_21-4" data-name="Path 21" d="M.7,0S-4.585,22.132,13.887,28.754s13.941-4.531,3.137-9.062S.7,0,.7,0Z" transform="matrix(0.883, 0.469, -0.469, 0.883, 263.161, 221.093)" fill="#1a6108"/>
            <path id="Path_22-4" data-name="Path 22" d="M.7,0S-4.585,22.132,13.887,28.754s13.941-4.531,3.137-9.062S.7,0,.7,0Z" transform="translate(264.415 222.75) rotate(170)" fill="#1a6108"/>
          </g>
        </g>
        <g id="Group_95" data-name="Group 95" transform="translate(67.766 155.025)">
          <path id="Path_13-5" data-name="Path 13" d="M429.563-537.9h7.525s3.067-47.924,11.181-62.4,5.943-18.124-4.932,0S429.563-537.9,429.563-537.9Z" transform="translate(-417.992 636.744)" fill="#6ed27b"/>
          <g id="Group_127" data-name="Group 127" transform="translate(0)">
            <path id="Path_15-5" data-name="Path 15" d="M638.137-581.554a36.411,36.411,0,0,1,7.566,10.473,28.946,28.946,0,0,1,2.67,17.393c-2.67,16.467,9.568-7.121,5.563-17.357S638.137-581.554,638.137-581.554Z" transform="translate(-603.796 604.356)" fill="#1a6108"/>
            <path id="Path_16-5" data-name="Path 16" d="M0,29.608S15.477,13.123,18.325,3.418s8.431,3.419.129,12.528A62.889,62.889,0,0,1,0,29.608Z" transform="translate(18.917 47.726) rotate(-146)" fill="#1a6108"/>
            <path id="Path_17-5" data-name="Path 17" d="M16.612,33.541A36.411,36.411,0,0,1,9.046,23.069,28.945,28.945,0,0,1,6.376,5.676C9.046-10.791-3.192,12.8.813,23.033S16.612,33.541,16.612,33.541Z" transform="translate(31.309 18.783) rotate(45)" fill="#1a6108"/>
            <path id="Path_18-5" data-name="Path 18" d="M0,0S15.477,16.485,18.325,26.19s8.431-3.419.129-12.528A62.888,62.888,0,0,0,0,0Z" transform="matrix(0.602, -0.799, 0.799, 0.602, 32.676, 24.18)" fill="#1a6108"/>
            <path id="Path_19-5" data-name="Path 19" d="M672.257-581.656s3.993-16.722-9.964-21.726-10.534,3.423-2.37,6.847S672.257-581.656,672.257-581.656Z" transform="translate(-636.784 604.93)" fill="#1a6108"/>
            <path id="Path_20-5" data-name="Path 20" d="M.529,0s-3.993,16.722,9.964,21.726,10.534-3.423,2.37-6.847S.529,0,.529,0Z" transform="translate(36.05 23.302) rotate(140)" fill="#1a6108"/>
            <path id="Path_21-5" data-name="Path 21" d="M.529,23.274S-3.464,6.552,10.493,1.549,21.026,4.972,12.863,8.4.529,23.274.529,23.274Z" transform="matrix(-0.883, 0.469, -0.469, -0.883, 46.411, 43.718)" fill="#1a6108"/>
            <path id="Path_22-5" data-name="Path 22" d="M.529,23.274S-3.464,6.552,10.493,1.548,21.026,4.972,12.863,8.4.529,23.274.529,23.274Z" transform="matrix(0.985, 0.174, -0.174, 0.985, 38.578, 1.499)" fill="#1a6108"/>
          </g>
        </g>
        <g id="Group_94" data-name="Group 94" transform="translate(32.408 143.43)">
          <path id="Path_13-6" data-name="Path 13" d="M429.563-513.746h9.959s4.059-63.427,14.8-82.58,7.865-23.987-6.527,0S429.563-513.746,429.563-513.746Z" transform="translate(-414.249 644.57)" fill="#6ed27b"/>
          <g id="Group_126" data-name="Group 126">
            <path id="Path_15-6" data-name="Path 15" d="M638.137-581.554a48.19,48.19,0,0,1,10.013,13.86,38.309,38.309,0,0,1,3.534,23.02c-3.534,21.794,12.664-9.424,7.363-22.972S638.137-581.554,638.137-581.554Z" transform="translate(-592.687 611.732)" fill="#1a6108"/>
            <path id="Path_16-6" data-name="Path 16" d="M0,39.186S20.483,17.368,24.253,4.523s11.158,4.525.171,16.581A83.232,83.232,0,0,1,0,39.186Z" transform="translate(25.036 63.165) rotate(-146)" fill="#1a6108"/>
            <path id="Path_17-6" data-name="Path 17" d="M21.986,44.392a48.19,48.19,0,0,1-10.013-13.86A38.309,38.309,0,0,1,8.439,7.512c3.534-21.794-12.664,9.424-7.363,22.972S21.986,44.392,21.986,44.392Z" transform="translate(41.437 24.86) rotate(45)" fill="#1a6108"/>
            <path id="Path_18-6" data-name="Path 18" d="M0,0S20.483,21.818,24.253,34.663s11.158-4.525.171-16.581A83.231,83.231,0,0,0,0,0Z" transform="matrix(0.602, -0.799, 0.799, 0.602, 43.246, 32.003)" fill="#1a6108"/>
            <path id="Path_19-6" data-name="Path 19" d="M678.549-574.127s5.285-22.132-13.187-28.754-13.941,4.531-3.137,9.062S678.549-574.127,678.549-574.127Z" transform="translate(-631.6 604.93)" fill="#1a6108"/>
            <path id="Path_20-6" data-name="Path 20" d="M.7,0S-4.585,22.132,13.887,28.754s13.941-4.531,3.137-9.062S.7,0,.7,0Z" transform="translate(47.712 30.84) rotate(140)" fill="#1a6108"/>
            <path id="Path_21-6" data-name="Path 21" d="M.7,30.8S-4.585,8.672,13.887,2.049s13.941,4.531,3.137,9.062S.7,30.8.7,30.8Z" transform="matrix(-0.883, 0.469, -0.469, -0.883, 61.424, 57.86)" fill="#1a6108"/>
            <path id="Path_22-6" data-name="Path 22" d="M.7,30.8S-4.585,8.671,13.887,2.049s13.941,4.531,3.137,9.062S.7,30.8.7,30.8Z" transform="matrix(0.985, 0.174, -0.174, 0.985, 51.058, 1.984)" fill="#1a6108"/>
          </g>
        </g>
        <g id="Group_97" data-name="Group 97" transform="translate(46.691 201.885)">
          <path id="Path_13-7" data-name="Path 13" d="M429.563-525.006h8.824s3.6-56.2,13.112-73.169,6.969-21.254-5.784,0S429.563-525.006,429.563-525.006Z" transform="translate(-415.994 640.921)" fill="#6ed27b"/>
          <g id="Group_125" data-name="Group 125">
            <path id="Path_15-7" data-name="Path 15" d="M638.137-581.554a42.7,42.7,0,0,1,8.872,12.281,33.943,33.943,0,0,1,3.131,20.4c-3.131,19.31,11.221-8.35,6.524-20.354S638.137-581.554,638.137-581.554Z" transform="translate(-597.866 608.293)" fill="#1a6108"/>
            <path id="Path_16-7" data-name="Path 16" d="M0,34.72S18.149,15.389,21.489,4.008s9.886,4.009.152,14.691A73.747,73.747,0,0,1,0,34.72Z" transform="translate(22.183 55.967) rotate(-146)" fill="#1a6108"/>
            <path id="Path_17-7" data-name="Path 17" d="M19.48,39.333a42.7,42.7,0,0,1-8.872-12.281,33.943,33.943,0,0,1-3.131-20.4C10.608-12.654-3.744,15.006.953,27.01S19.48,39.333,19.48,39.333Z" transform="translate(36.715 22.027) rotate(45)" fill="#1a6108"/>
            <path id="Path_18-7" data-name="Path 18" d="M0,0S18.149,19.332,21.489,30.712s9.886-4.009.152-14.691A73.747,73.747,0,0,0,0,0Z" transform="matrix(0.602, -0.799, 0.799, 0.602, 38.318, 28.356)" fill="#1a6108"/>
            <path id="Path_19-7" data-name="Path 19" d="M675.615-577.637s4.683-19.61-11.684-25.477-12.352,4.015-2.779,8.029S675.615-577.637,675.615-577.637Z" transform="translate(-634.017 604.93)" fill="#1a6108"/>
            <path id="Path_20-7" data-name="Path 20" d="M.62,0S-4.063,19.61,12.3,25.477s12.352-4.015,2.779-8.029S.62,0,.62,0Z" transform="translate(42.275 27.326) rotate(140)" fill="#1a6108"/>
            <path id="Path_21-7" data-name="Path 21" d="M.62,27.293S-4.063,7.683,12.3,1.816s12.352,4.015,2.779,8.029S.62,27.293.62,27.293Z" transform="matrix(-0.883, 0.469, -0.469, -0.883, 54.424, 51.266)" fill="#1a6108"/>
            <path id="Path_22-7" data-name="Path 22" d="M.62,27.293S-4.063,7.683,12.3,1.816,24.657,5.83,15.084,9.845.62,27.293.62,27.293Z" transform="matrix(0.985, 0.174, -0.174, 0.985, 45.239, 1.758)" fill="#1a6108"/>
          </g>
        </g>
      </g>
    </g>
</div>
<main>
  <h1>Log in</h1>
  <form>
    <label>
      <input type="text" placeholder="HvA-ID">
    </label>
    <label>
      <input type="password" placeholder="Wachtwoord">
    </label>
    <input on:click|preventDefault={login} type="submit" value="Login">
    <a href="/wachtwoord-vergeten" use:link>Wachtwoord vergeten?</a>
  </form>
</main>

<style>
  .sun {
    position: absolute;
    transform: translate(0, -3.75rem);
  }

  .sand-dark {
    position: absolute;
    transform: translate(-8rem, -1.25rem);
  }

  .sand-light {
    position: absolute;
    transform: scale(1.1) translate(-5rem, 1rem);
  }

  .pond {
    position: absolute;
    transform: translate(2rem, 3.5rem);
  }

  main {
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 0;
    width: 100%;
    font-family: "Pauschal";
    background-color: var(--std-bg-color);
  }

  h1 {
    font-family: "Kotori Rose";
    color: black;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2.5rem;
    z-index: 1;
  }

  form {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input:not([type="submit"]) {
    color: black;
    border: none;
    padding: 0.75rem 1.25rem;
    border-radius: 4rem;
    text-shadow: none;
    appearance: none;
    margin-bottom: 1.75rem;
  }

  input:not([type="submit"]):focus,
  input:not([type="submit"]):focus-visible {
    outline: 2px solid black;
  }

  input[type="submit"] {
    font-family: "Pauschal";
    font-size: 1.25rem;
    background-color: black;
    color: white;
    padding: 0.75rem;
    border: none;
    border-radius: 0.25rem;
    width: 15rem;
    margin-bottom: 0.75rem;
  }

  input[type="submit"]:hover {
    cursor: pointer;
  }

  a {
    font-family: "Pauschal";
    margin-bottom: 1.1rem;
    font-size: 0.9rem;
  }
</style>