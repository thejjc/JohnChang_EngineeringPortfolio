---
title: "Spacecraft Attitude Dynamics & Control"
permalink: /project2/
---

[← Index]({{ '/' | relative_url }})

# Spacecraft Attitude Dynamics & Control

> **Summary:** [One sentence — mission context and control objective.]

## Objective

[What maneuver or pointing requirement drove this project — detumbling, slew, station-keeping? What made it a non-trivial control problem?]

## Process

#### Kinematics
Represented orientation using Direction Cosine Matrices and Euler parameters (quaternions) to avoid the singularities of Euler angles.

#### Dynamics
Modeled the rigid-body rotational equations of motion from the spacecraft's inertia tensor.

#### Control
Designed a feedback control law — [specify type, e.g. PD control on quaternion error] — and tuned it in simulation against [disturbances or constraints considered].

## Results

* **Convergence:** [settling time / final pointing accuracy]
* **Robustness:** [performance under disturbance torques or off-nominal initial conditions]

## Documentation

* [Source files](https://github.com/thejjc/JohnChang_EngineeringPortfolio)
* [Technical report (PDF)]({{ '/assets/Attitude_Control_Report.pdf' | relative_url }})
