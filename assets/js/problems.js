let problems = [
	{
		"title": "Quadratic Formula",
		"description": "Classic.",
		"latex": String.raw`x = \dfrac{-b\pm\sqrt{b^2-4ac}}{2a}`
	},
	{
		"title": "Pythagorean Theorem",
		"description": "Classic.",
		"latex": String.raw`c = \sqrt{a^2+b^2}`
	},
	{
		"title": "Sum of Squares",
		"description": "Classic.",
		"latex": String.raw`\sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}`
	},
	{
		"title": "Law of Cosines",
		"description": "Classic.",
		"latex": String.raw`c^2 = a^2 + b^2 - 2ab \cos \angle C`
	},
	{
		"title": "Legendre's formula",
		"description": "Floors.",
		"latex": String.raw`\nu_p(n!) = \sum_{i = 1}^{\infty} \left \lfloor \dfrac{n}{p^i} \right \rfloor`
	},
	{
		"title": "Euler's Identity",
		"description": "The most beautiful equation in mathematics.",
		"latex": String.raw`e^{\pi i} + 1 = 0`
	},
	{
		"title": "Euler's Troll Identity",
		"description": "Troll.",
		"latex": String.raw`\lceil e \rceil - \lfloor \pi \rfloor = 0`
	},
	{
		"title": "Normal Distribution",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\Phi(x) = \frac{1}{\sqrt{2\pi \sigma}} e^{\frac{(x - \mu)^2}{2\sigma^2}}`
	},
	{
		"title": "Fourier Transform",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`f(\omega) = \int_{-\infty}^\infty f(x) e^{-2\pi i x \omega} dx`
	},
	{
		"title": "Wave Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\frac{\partial^2u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}`
	},
	{
		"title": "Navier-Stokes Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\rho \left ( \frac{\partial \mathbf{v}}{\partial t} + \mathbf{v} \cdot \nabla \mathbf{v} \right) = - \nabla p + \nabla \cdot \mathbf{T} + \mathbf{f}`
	},
	{
		"title": "Schrodinger's Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`ih\frac{\partial}{\partial t} \Psi = H \Psi`
	},
	{
		"title": "Black-Scholes Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\frac{\partial V}{\partial t} + \frac{1}{2} \sigma^2 S^2 \frac{\partial^2V}{\partial S^2} + rS \frac{\partial V}{\partial S} - rV = 0`
	},
	{
		"title": "Relativity",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`E=mc^2`
	},
	{
		"title": "Chaos Theory",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`x_{t+1} = k x_t (1 - x_t)`
	},
	{
		"title": "Definition of the Derivative",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\frac{df}{dx} = \lim_{h \to 0} \frac{f(t + h) - f(t)}{h}`
	},
	{
		"title": "Euler's Formula for Polyhedra",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`V - E + F = 2`
	},
	{
		"title": "Gravitation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`F = \frac{Gm_1m_2}{d^2}`
	},
	{
		"title": "AM-GM",
		"description": "Fun",
		"latex": String.raw`\frac{x_1 + x_2 + \cdots + x_n}{n} \ge \sqrt[n]{x_1 \cdot x_2 \cdots x_n}`
	},
	{
		"title": "Stirling's Approximation",
		"description": "Fun",
		"latex": String.raw`n! \approx \sqrt{2\pi n} \left ( \frac{n}{e}\right )^n`
	},
	{
		"title": "Stokes' theorem",
		"description": "Fun",
		"latex": String.raw`\iint_S \nabla \times \mathbf{F} \cdot d\mathbf{S} = \oint_\Gamma \mathbf{F} \cdot d \mathbf{\Gamma} `
	},
	{
		"title": "Divergence theorem",
		"description": "Fun",
		"latex": String.raw`\iiint_V (\nabla \cdot \mathbf{F}) dV = \oiint_S (\mathbf{F} \cdot \mathbf{n}) dS`
	},
	{
		"title": "Cauchy-Schwarz Inequality",
		"description": "Fun",
		"latex": String.raw`|\langle \mathbf{u}, \mathbf{v} \rangle|^2 \le \langle \mathbf{u}, \mathbf{u} \rangle \cdot \langle \mathbf{v} , \mathbf{v} \rangle`
	},
	{
		"title": "Area of a circle",
		"description": "Simple",
		"latex": String.raw`A = \pi r^2`
	},
	{
		"title": "Definition of tau",
		"description": "Troll.",
		"latex": String.raw`\tau = 2\pi`
	},
	{
		"title": "Sophie Germain Identity",
		"description": "Simple.",
		"latex": String.raw`a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 -2ab + 2b^2)`
	},
	{
		"title": "Pascal's Identity",
		"description": "Classic.",
		"latex": String.raw`\binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1}`
	},
	{
		"title": "Hockey-stick identity",
		"description": "Classic.",
		"latex": String.raw`\sum_{i=r}^n \binom{i}{r} = \binom{n+1}{r+1}`
	},
	{
		"title": "Vandermonde's identity",
		"description": "Classic.",
		"latex": String.raw`\binom{m + n}{r} = \sum_{k = 0}^r \binom{m}{k} \binom{n}{r-k}`
	},
	{
		"title": "Combinations",
		"description": "Simple.",
		"latex": String.raw`\binom{n}{k} = \frac{n!}{k!(n-k)!}`
	},
	{
		"title": "Hein's identity",
		"description": "No idea what this is. Looks cool tho.",
		"latex": String.raw`\frac{1}{\sqrt{z - \cos \psi}} = \frac{\sqrt{2}}{\pi} \sum_{m = -\infty}^\infty Q_{m - \frac{1}{2}}(z) e^{im\psi}`
	},
	{
		"title": "Binomial identity",
		"description": "Classic.",
		"latex": String.raw`(x + y)^n = \sum_{k=0}^n \binom{n}{k} x^{n-k} y^k`
	},
	{
		"title": "Hermite's identity",
		"description": "Hadn't heard of this either.",
		"latex": String.raw`\sum_{k=0}^{n-1} \left \lfloor x + \frac{k}{n} \right \rfloor = \lfloor nx \rfloor`
	},
	{
		"title": "Matrix determinant lemma",
		"description": "Or this lmao.",
		"latex": String.raw`\det (\mathbf{A} + \mathbf{u}\mathbf{v}^{\intercal}) = (1 + \mathbf{v}^\intercal \mathbf{A}^{-1} \mathbf{u}) \det (\mathbf{A})`
	},
	{
		"title": "Euler product of Riemann-Zeta function",
		"description": "Classic.",
		"latex": String.raw`\zeta(s) = \sum_{n=1}^\infty \frac{1}{n^s} = \prod_{p \in \mathbb{P}} \frac{1}{1 - p^{-s}}`
	},
	{
		"title": "Irrationality of the square root of 2",
		"description": "I just really wanted to keep using \\mathbb.",
		"latex": String.raw`\sqrt{2} \notin \mathbb{Q}`
	},
	{
		"title": "Heron's Formula",
		"description": "Classic.",
		"latex": String.raw`[\triangle ABC] = \sqrt{s(s-a)(s-b)(s-c)}`
	},
	{
		"title": "Heisenberg's Uncertainty Principle",
		"description": "Classic.",
		"latex": String.raw`\Delta x \Delta p \approx \hbar`
	},
	{
		"title": "Continuted Fraction for pi",
		"description": "@InertialObservr",
		"latex": String.raw`\frac{\pi}{2} = 1 + \frac{1}{1 + \frac{1}{\frac{1}{2} + \frac{1}{\frac{1}{3} + \frac{1}{\frac{1}{4} + \ddots}}}}`
	},
	{
		"title": "Sophomore's Dream",
		"description": "Cool.",
		"latex": String.raw`\int_0^1 x^{-x} dx = \sum_{n=1}^\infty n^{-n}`
	},
	{
		"title": "Sophomore's Dream",
		"description": "@InertialObservr",
		"latex": String.raw`\prod_{n=2}^\infty e \left (1 - \frac{1}{n^2} \right)^{n^2} = \frac{\pi}{e \sqrt{e}}`
	},
	{
		"title": "Nested square root representation of the golden ratio",
		"description": "@InertialObservr",
		"latex": String.raw`\phi = \sqrt{1 + \sqrt{1 + \sqrt{1 + \sqrt{1 + \cdots}}}}`
	},
	{
		"title": "The sum of all positive integers",
		"description": "Troll.",
		"latex": String.raw`\sum_{n = 1}^\infty n = -\frac{1}{12}`
	},
	{
		"title": "Inverse of a complex number",
		"description": "Gotta know \\bar man",
		"latex": String.raw`z^{-1} = \frac{\bar{z}}{|z|^2}, \forall z \neq 0`
	},
	{
		"title": "Definition of convolution",
		"description": "Shout out to 6.003",
		"latex": String.raw`(f * g)(t) = \int_{-\infty}^\infty f(\tau) g(t - \tau) d\tau`
	}
];
