---
author: Abdul Hanan
pubDatetime: 2026-11-01T19:36:13Z
title: "Arvel desk buddy"
postSlug: arvel-desk-buddy
featured: false
ogImage: images/arvel-desk-buddy.jpg
tags:
- ESP32
- Rust
- SvelteKit
- ESP-IDF
description: Arvel is a desk companion for the Waveshare ESP32-S3-Touch-LCD-3.49, with ESP-IDF firmware, a Rust agent runtime on the board and a SvelteKit web app.
---

![Arvel held up to the camera. The long 3.49-inch screen shows a bird mascot at its laptop next to a Pomodoro card reading Focus, round 1 of 4, with 19:54 left and Pause, +5 min and Cancel buttons.](/images/arvel-desk-buddy.jpg)

*The desk buddy running a focus timer. The screen is 172 by 640 pixels.*

This is a different thing from the [Arvel coding agent](/projects/khadim-local-first-ai-coding-agent). It shares the name, but it lives on a small board on my desk.

## What it is

Arvel is a desk companion for the Waveshare ESP32-S3-Touch-LCD-3.49. That board has a long, thin touchscreen. Arvel puts a small scene on it, a status card and a few quick actions.

## What runs on the board

The firmware is built with ESP-IDF. The board also runs a Rust agent runtime, [unravel-agent-runtime](https://github.com/unravelaidk/unravel-agent-runtime), which runs the agent loop and the device tools. A C++ binding calls into the Rust code, and C++ supplies the model transport and the tool callbacks.

## How the pieces talk

The board serves a SvelteKit web app to its owner. It shows the device screen live, keeps your conversation history, and is where you save provider keys and pick a conversation mode. It runs over plain HTTP, so it belongs on a trusted home network only.

## What it does

You can type or talk to it. It sets timers and Pomodoro rounds, keeps notes, checks the weather and searches the web. Cloud models handle the conversation. The board runs the tool calls itself. Timers, notes, calculations and unit conversions stay fully local. Weather comes from Open-Meteo, and web search needs its own key and starts switched off.

## What is not done

There is also a native speech mode built for an NVIDIA voice model. That deployment has not been GPU-tested. The firmware has host tests and build coverage, but its display, audio and SD card fault handling have not been checked on physical hardware. Local speech is a simple English formant voice, not neural TTS.

The code, build steps and the full list of limitations are on GitHub: [hananinas/arvel](https://github.com/hananinas/arvel).
