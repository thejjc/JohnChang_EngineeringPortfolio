# Project: Spacecraft Attitude Dynamics & Control

[← Back to Main Page](/)

---

> **Quick Summary:** [One or two sentences on the spacecraft/mission context — what body was being controlled, and toward what goal (e.g. pointing accuracy, detumbling, slew maneuver).]

---

### ## 🎯 The Problem & Objective

[What was the spacecraft supposed to do — reorient, track a target, reject a disturbance? What made this a non-trivial attitude control problem?]

My personal goal was to [e.g. build a full attitude estimation and control pipeline from first principles, rather than relying on a black-box toolbox function].

---

### ## 🛠 My Process & Tools

#### 1. Kinematics (Direction Cosine Matrices & Euler Parameters)

I represented spacecraft orientation using **Direction Cosine Matrices (DCM)** and **Euler parameters (quaternions)** to avoid the singularities of Euler angles. This let me:
* [Propagate attitude over time given angular velocity]
* [Convert between representations for different stages of the pipeline]
* [State the singularity/gimbal-lock problem you were solving for]

#### 2. Dynamics Modeling

I modeled the rigid-body rotational equations of motion (Euler's equations) using the spacecraft's inertia tensor to capture how applied torques translate into angular acceleration.

#### 3. Feedback Control Design

I designed a **feedback control law** to drive the spacecraft to a target attitude:
* [Control law type — e.g. PD control on quaternion error, or a specific nonlinear control law]
* [How you tuned gains — simulation, pole placement, etc.]
* [Disturbances or constraints considered — actuator saturation, sensor noise]

---

### ## 📈 The Results

* **Convergence:** [e.g. time to settle within X degrees of target attitude]
* **Robustness:** [How the controller performed under disturbance torques or initial condition variation]
* **Accuracy:** [Steady-state pointing error, overshoot, or other key metric]

[Consider including a plot of attitude error vs. time, or angular velocity vs. time.]

---

### ## 📚 Project Files & Documentation

* **[View the MATLAB/Simulink Files on GitHub](https://github.com/thejjc/REPLACE-WITH-REPO-NAME)**
* **[Download the Full Technical Report (PDF)](assets/Attitude_Control_Report.pdf)**