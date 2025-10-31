
# Project: Solid Rocket Motor Nozzle Analysis

[← Back to Main Page](/)

---

> **Quick Summary:** This project involved the complete design and analysis of a conical rocket nozzle. I used **MATLAB** for 1D thermodynamic calculations and **ANSYS** to perform a 2D Finite Element Analysis (FEA) to validate the structural and thermal integrity of the design.



---

### ## 🎯 The Problem & Objective

The objective was to design a solid rocket motor nozzle for a conceptual sounding rocket. The design had to meet specific performance targets (like thrust and exit velocity) while being structurally sound under immense pressure (5 MPa) and extreme temperatures (3000 K).

My personal goal was to get hands-on experience with the full engineering analysis workflow, from initial theory to final simulation.

---

### ## 🛠 My Process & Tools

I broke the project down into three main phases:

#### 1. Theoretical Analysis (MATLAB)

First, I developed a **MATLAB** script to solve the 1D isentropic flow equations. This allowed me to:
* Calculate the required throat and exit areas for ideal expansion.
* Plot the expected pressure, temperature, and velocity of the gas along the nozzle's length.
* Determine the theoretical thrust and specific impulse ($I_{sp}$).

#### 2. 3D Modeling (SolidWorks)

Using the dimensions from my MATLAB script, I modeled a 3D component in **SolidWorks**. I designed a conical nozzle with a 15-degree divergence angle and included a graphite throat insert, as it's a common material for high-temperature applications.

#### 3. Simulation & Validation (ANSYS)

This was the most critical step. I used **ANSYS Mechanical** to verify my design.

* **Structural Analysis:** I applied the calculated pressure profile from MATLAB as a load on the nozzle's inner walls to find the resulting von Mises stress.
* **Thermal Analysis:** I ran a steady-state thermal analysis, applying the 3000 K gas temperature with a convective heat transfer coefficient to see how the heat would dissipate through the nozzle body.

---

### ## 📈 The Results

The project was a success and validated my design.

* **Performance:** The MATLAB script predicted a thrust of 8.5 kN, meeting the project's requirements.
* **Safety:** The FEA results showed that the maximum stress was well below the yield strength of the steel casing (Factor of Safety = 2.8).
* **Thermal:** The thermal analysis confirmed that the graphite insert effectively absorbed the majority of the heat, protecting the outer structure.




---

### ## 📚 Project Files & Documentation

* **[View the MATLAB Script on GitHub](https://github.com/your-username/your-repo-name/blob/main/nozzle_analysis.m)**
* **[Download the Full Technical Report (PDF)](assets/Nozzle_Design_Report.pdf)**
