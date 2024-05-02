# Probelem Statement:

## Traffic light:

### Description:

You are tasked with building a simple traffic light component using React. The traffic light should consist of three lights: red, yellow, and green. The lights should switch from green to yellow to red after predetermined intervals and loop indefinitely.
Each light should be lit for the following durations:
Red light: 4000ms
Yellow light: 500ms
Green light: 3000ms
Your task is to implement a React component that represents the traffic light and switches between these colors based on the specified intervals. Additionally, you should style the traffic light to make it visually appealing.
**Requirements:**
Use React to create a component called TrafficLight.
The TrafficLight component should display three lights: red, yellow, and green.
The lights should switch according to the following intervals:
Red light: 4000ms
Yellow light: 500ms
Green light: 3000ms
The traffic light should loop indefinitely, switching between colors in the specified order.
Ensure that only one light is active at a time.
Style the traffic light to make it visually appealing. You can use CSS or any other styling method of your choice.
Example:
Here's how the traffic light should behave:
Initially, the red light should be active.
After 4000ms, the red light turns off, and the green light turns on.
After 3000ms, the green light turns off, and the yellow light turns on.
After 500ms, the yellow light turns off, and the red light turns on.
This sequence repeats indefinitely.

## LEARNINGS:

1. **State Management**: The usage of useState hook to manage the state of the active light (active variable) in the TrafficLight component.
2. **Lifecycle Management:** The usage of useEffect hook to handle side effects (in this case, changing the active light) based on changes to the state. This hook allows you to perform side effects in function components.
3. **Conditional Rendering:** Conditional rendering is achieved by dynamically setting the style attribute of each light element based on whether it's the active light or not. This is done using inline styles with the ternary operator {active !== LIGHTS.green ? { opacity: 0.3 } : null}.
4. **Timers:** Using setTimeout to change the active light after a specific interval, simulating the behavior of a traffic light sequence.
5. **Component Composition:** The TrafficLight component is composed of three individual light components, each with its own CSS class (green, yellow, red) to control styling and appearance.
