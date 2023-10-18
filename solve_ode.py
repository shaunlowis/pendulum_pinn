import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import solve_ivp

def diff_eq(t, y, l):
    theta, theta_dot = y
    theta_double_dot = (-theta / l) * np.sin(theta)
    return [theta_dot, theta_double_dot]


# Initial conditions
initial_theta = 1.0  # You can choose your desired initial value
initial_theta_dot = 0.0  # Initial angular velocity

# Time span
t_span = (0, 10)  # Adjust this as needed


l = 1.0  # Replace with your desired value for 'l'
sol = solve_ivp(diff_eq, t_span, [initial_theta, initial_theta_dot], args=(l,), t_eval=np.linspace(0, 10, 500))


plt.figure(figsize=(8, 6))
plt.plot(sol.t, sol.y[0], label='Theta')
plt.xlabel('Time (t)')
plt.ylabel('Theta')
plt.title('Visualization of d^2theta/dt^2 = (-theta/l)*sin(theta)')
plt.legend()
plt.grid()
plt.show()
