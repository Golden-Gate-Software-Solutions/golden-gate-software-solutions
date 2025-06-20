+++
title = "Waldo"
+++

# Developing Waldo: A 2D Map Client for AWS IoT RoboRunner

[Visit](https://aws.amazon.com/about-aws/whats-new/2022/11/aws-iot-roborunner-generally-available/)

![2D IoT Device Map Prototype](https://raw.githubusercontent.com/abstractionjackson/portfolio-hugo/refs/heads/main/content/project/waldo/images/robot-map.webp)

## Overview

Waldo is a 2D map client application designed to visualize and manage robot fleets using AWS IoT RoboRunner. It provides real-time spatial representations of robotic operations, enabling efficient monitoring and coordination within industrial environments.

## Challenges

- **Real-Time Visualization:** Rendering dynamic positions and movements of multiple robots simultaneously.
- **Scalability:** Supporting various robot types and fleet sizes without compromising performance.
- **Integration:** Seamlessly interfacing with AWS IoT RoboRunner's APIs for data retrieval and command execution.

## Solutions

- **WebSocket Communication:** Implemented WebSocket connections to receive real-time updates on robot statuses and locations.
- **Efficient Rendering Engine:** Developed a lightweight rendering engine capable of handling numerous entities on the map concurrently.
- **Modular Integration Layer:** Created an abstraction layer to facilitate easy integration with AWS IoT RoboRunner's APIs.

## Implementation

1. **Data Ingestion:** Utilized AWS IoT RoboRunner's data streams to gather real-time information on robot positions and tasks.
2. **Map Rendering:** Leveraged HTML5 Canvas and JavaScript to render a 2D map displaying robot locations and trajectories.
3. **User Interaction:** Enabled features such as zooming, panning, and robot selection to enhance user experience.
4. **Command Interface:** Integrated controls allowing users to send commands to individual robots directly from the map interface.

## Technologies Used

- **AWS IoT RoboRunner:** Provided the backend infrastructure for robot fleet management.
- **WebSockets:** Facilitated real-time communication between the client and server.
- **HTML5 Canvas:** Enabled efficient 2D rendering within web browsers.
- **JavaScript Frameworks:** Utilized React.js for building a responsive user interface.

## Conclusion

Waldo enhances operational efficiency by providing a real-time, interactive visualization tool for managing robot fleets through AWS IoT RoboRunner. Its scalable design and seamless integration capabilities make it a valuable asset for industrial automation.
