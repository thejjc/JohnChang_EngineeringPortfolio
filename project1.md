---
title: "Solid Rocket Motor Nozzle Analysis"
permalink: /project1/
---

[← Index]({{ '/' | relative_url }})

# Solid Rocket Motor Nozzle Analysis

> **Summary:** Full design and validation of a conical rocket nozzle — 1D thermodynamic sizing in MATLAB, parametric modeling in SolidWorks, and structural/thermal FEA validation in ANSYS.

## Objective

Design a solid rocket motor nozzle for a conceptual sounding rocket, meeting thrust and exit-velocity targets while surviving 5 MPa chamber pressure and 3000 K gas temperature.

## Process

#### Theory — MATLAB
Solved the 1D isentropic flow equations to size the throat and exit areas, plot pressure, temperature, and velocity along the nozzle length, and predict thrust and specific impulse ($I_{sp}$).

#### Modeling — SolidWorks
Built a conical nozzle with a 15° divergence angle and a graphite throat insert, sized directly from the MATLAB results.

#### Validation — ANSYS
Ran a structural analysis (von Mises stress under the calculated pressure load) and a steady-state thermal analysis (3000 K gas temperature with convective heat transfer) to confirm the design survives operating conditions.

## Results

* **Thrust:** 8.5 kN — met the target
* **Structural margin:** Factor of safety 2.8 against yield
* **Thermal:** Graphite insert absorbed the majority of incident heat, protecting the outer casing

## Documentation

* [MATLAB script](https://github.com/thejjc/JohnChang_EngineeringPortfolio/blob/main/nozzle_analysis.m)
* [Technical report (PDF)]({{ '/assets/Nozzle_Design_Report.pdf' | relative_url }})
