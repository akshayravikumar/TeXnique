// Have a problem to add? Submit it here: https://forms.gle/DXjPeTL5DbJBhKRv8

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
		"title": String.raw`Sum of first \(n\) Squares`,
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
		"title": "Euler's Lesser-Known Identity",
		"description": "Troll.",
		"latex": String.raw`\lceil e \rceil - \lfloor \pi \rfloor = 0`
	},
	{
		"title": "Normal Distribution",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\Phi(x) = \frac{1}{\sqrt{2\pi \sigma}} e^{-\frac{(x - \mu)^2}{2\sigma^2}}`
	},
	{
		"title": "Fourier Transform",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\hat{f}(\omega) = \int_{-\infty}^\infty f(x) e^{-2\pi i x \omega} \mathrm dx`
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
		"latex": String.raw`i\hbar\frac{\partial}{\partial t} \Psi = H \Psi`
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
		"latex": String.raw`\frac{\mathrm df}{\mathrm dx} = \lim_{h \to 0} \frac{f(t + h) - f(t)}{h}`
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
		"title": "Stokes' Theorem",
		"description": "Fun",
		"latex": String.raw`\iint_S \nabla \times \mathbf{F} \cdot \mathrm d\mathbf{S} = \oint_\Gamma \mathbf{F} \cdot \mathrm d \mathbf{\Gamma} `
	},
	{
		"title": "Divergence Theorem",
		"description": "Fun",
		"latex": String.raw`\iiint_V (\nabla \cdot \mathbf{F}) \mathrm dV = \oiint_S (\mathbf{F} \cdot \mathbf{n}) \mathrm dS`
	},
	{
		"title": "Cauchy-Schwarz Inequality",
		"description": "Fun",
		"latex": String.raw`|\langle \mathbf{u}, \mathbf{v} \rangle|^2 \le \langle \mathbf{u}, \mathbf{u} \rangle \cdot \langle \mathbf{v} , \mathbf{v} \rangle`
	},
	{
		"title": "Area of a Circle",
		"description": "Simple",
		"latex": String.raw`A = \pi r^2`
	},
	{
		"title": String.raw`Definition of \(\tau\)`,
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
		"title": "Hockey-stick Identity",
		"description": "Classic.",
		"latex": String.raw`\sum_{i=r}^n \binom{i}{r} = \binom{n+1}{r+1}`
	},
	{
		"title": "Vandermonde's Identity",
		"description": "Classic.",
		"latex": String.raw`\binom{m + n}{r} = \sum_{k = 0}^r \binom{m}{k} \binom{n}{r-k}`
	},
	{
		"title": "Combinations",
		"description": "Simple.",
		"latex": String.raw`\binom{n}{k} = \frac{n!}{k!(n-k)!}`
	},
	{
		"title": "Heine's Identity",
		"description": "No idea what this is. Looks cool tho.",
		"latex": String.raw`\frac{1}{\sqrt{z - \cos \psi}} = \frac{\sqrt{2}}{\pi} \sum_{m = -\infty}^\infty Q_{m - \frac{1}{2}}(z) e^{im\psi}`
	},
	{
		"title": "Binomial identity",
		"description": "Classic.",
		"latex": String.raw`(x + y)^n = \sum_{k=0}^n \binom{n}{k} x^{n-k} y^k`
	},
	{
		"title": "Hermite's Identity",
		"description": "Hadn't heard of this either.",
		"latex": String.raw`\sum_{k=0}^{n-1} \left \lfloor x + \frac{k}{n} \right \rfloor = \lfloor nx \rfloor`
	},
	{
		"title": "Matrix Determinant Lemma",
		"description": "Or this lmao.",
		"latex": String.raw`\det (\mathbf{A} + \mathbf{u}\mathbf{v}^{\intercal}) = (1 + \mathbf{v}^\intercal \mathbf{A}^{-1} \mathbf{u}) \det (\mathbf{A})`
	},
	{
		"title": "Euler Product of the Riemann-Zeta function",
		"description": "Classic.",
		"latex": String.raw`\zeta(s) = \sum_{n=1}^\infty \frac{1}{n^s} = \prod_{p \in \mathbb{P}} \frac{1}{1 - p^{-s}}`
	},
	{
		"title": "Irrationality of the Square Root of 2",
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
		"title": String.raw`Continued Fraction for \(\pi/2\)`,
		"description": "@InertialObservr",
		"latex": String.raw`\frac{\pi}{2} = 1 + \frac{1}{1 + \frac{1}{\frac{1}{2} + \frac{1}{\frac{1}{3} + \frac{1}{\frac{1}{4} + \ddots}}}}`
	},
	{
		"title": "Sophomore's Dream",
		"description": "Cool.",
		"latex": String.raw`\int_0^1 x^{-x} \mathrm dx = \sum_{n=1}^\infty n^{-n}`
	},
	{
		"title": String.raw`Identity involving \(\pi\) and \(e\)`,
		"description": "@InertialObservr",
		"latex": String.raw`\prod_{n=2}^\infty e \left (1 - \frac{1}{n^2} \right)^{n^2} = \frac{\pi}{e \sqrt{e}}`
	},
	{
		"title": "Representation of the Golden Ratio",
		"description": "Classic",
		"latex": String.raw`\phi = \sqrt{1 + \sqrt{1 + \sqrt{1 + \sqrt{1 + \cdots}}}}`
	},
	{
		"title": "The Sum of all Positive Integers",
		"description": "Troll.",
		"latex": String.raw`\sum_{n = 1}^\infty n = -\frac{1}{12}`
	},
	{
		"title": "Inverse of a complex number",
		"description": "Gotta know \\bar man",
		"latex": String.raw`z^{-1} = \frac{\bar{z}}{|z|^2}, \forall z \neq 0`
	},
	{
		"title": "Definition of Convolution",
		"description": "Shout out to 6.003",
		"latex": String.raw`(f * g)(t) = \int_{-\infty}^\infty f(\tau) g(t - \tau) \mathrm d\tau`
	},
	{
		"title": "Definition of the Kronecker Delta function",
		"description": "{cases} ftw",
		"latex": String.raw`\delta_{i,j} = \begin{cases} 0 & i \neq j \\ 1 & i = j \end{cases}`
	},
	{
		"title": "Bayes' Theorem",
		"description": "bae's theorem",
		"latex": String.raw`P(A | B) = \frac{P(B|A)P(A)}{P(B)}`
	},
	{
		"title": String.raw`Probability Density Function of the Student's \(t\)-distribution`,
		"description": "fun",
		"latex": String.raw`f(t) = \frac{\Gamma \left ( \frac{\nu + 1}{2} \right )}{\sqrt{\nu \pi} \Gamma \left ( \frac{\nu}{2}\right)} \left ( 1 + \frac{t^2}{\nu} \right) ^{- \frac{\nu + 1}{2}}`
	},
	{
		"title": "De Morgan's laws",
		"description": "fun",
		"latex": String.raw`\neg (P \wedge Q ) \vdash (\neg P) \vee (\neg Q)`
	},
	{
		"title": "Principle of Inclusion-Exclusion",
		"description": "for dummies",
		"latex": String.raw`|A \cup B| = |A| + |B| - |A \cap B|`
	},
	{
		"title": "General Principle of Inclusion-Exclusion",
		"description": "for galaxy brains",
		"latex": String.raw`\left | \bigcup_{i = 1}^n A_i \right | = \sum_{\emptyset \neq J \subseteq \{1, \dots, n\}} (-1)^{|J| + 1} \left | \bigcap_{j \in J} A_j \right |`
	},
	{
		"title": String.raw`Determinant of a \(2 \times 2\) matrix`,
		"description": "{matrix}",
		"latex": String.raw`\det \begin{bmatrix} a & b \\ c & d \end{bmatrix} = ad - bc`
	},
	{
		"title": "Sawtooth Function",
		"description": "mathbb cases floors, this has it all",
		"latex": String.raw`S(x) = \begin{cases} x - \lfloor x \rfloor - 1/2 & x \in \mathbb{R} \setminus \mathbb{Z} \\ 0 & x \in \mathbb{Z} \end{cases}`
	},
	{
		"title": "Definition of Graham's Number",
		"description": "G = g_{64}",
		"latex": String.raw`g_n = \begin{cases} 3 \uparrow \uparrow \uparrow \uparrow 3 & n = 1 \\ 3 \uparrow^{g_{n-1}} 3 & n \ge 2,n \in \mathbb{N} \end{cases}`
	},
	{
		"title": "Burnside's Lemma",
		"description": "The Lemma that is not Burnside's",
		"latex": String.raw`|X/G| = \frac{1}{|G|} \sum_{g \in G} |X^g|`
	},
	{
		"title": "Continuum Hypothesis",
		"description": "independent of ZFC!",
		"latex": String.raw`\aleph_0 = |\mathbb{N}|, \mathfrak{c} = |\mathbb{R}| \\ \nexists A : \aleph_0 < |A| < \mathfrak{c}`
	},
	{
		"title": "Spectral Decomposition",
		"description": "derived from memory",
		"latex": String.raw`A = \begin{pmatrix} | & | & & | \\ \mathbf v_1 & \mathbf v_2 & \cdots & \mathbf v_n \\ | & | & & | \end{pmatrix} \begin{pmatrix} \lambda_1 & & & \\ & \lambda_2 & & \\ & & \ddots & \\ & & & \lambda_n \end{pmatrix} \begin{pmatrix} | & | & & | \\ \mathbf v_1 & \mathbf v_2 & \cdots & \mathbf v_n \\ | & | & & | \end{pmatrix} ^ {-1}`
	},
	{
		"title": "Pythagorean Identity",
		"description": "basically just the Pythagorean theorem",
		"latex": String.raw`\sin^2 \theta + \cos^2 \theta = 1`
	},
	{
		"title": "Double Angle for \sin",
		"description": "back to basics",
		"latex": String.raw`\sin(2\theta) = 2\sin(\theta)\cos(\theta)`
	},
	{
		"title": "Double Angle for \cos",
		"description": "back to basics",
		"latex": String.raw`\cos(2\theta) = \cos^2(\theta) - \sin^2(\theta)`
	},
	{
		"title": "Fermat's Last Theorem",
		"description": "have a marvelous proof, but this description's too small to contain it",
		"latex": String.raw`\nexists \{x,y,z,n\} \in \mathbb{N}, n > 2 : x^n + y^n = z^n`
	},
	{
		"title": "Fermat's Little Theorem",
		"description": "fermat's itty bitty theorem",
		"latex": String.raw`a^p \equiv a \pmod{p}`
	},
	{
		"title": "Euler's Theorem",
		"description": "totients",
		"latex": String.raw`\gcd(a, n) = 1 \implies a^{\varphi(n)} \equiv 1 \pmod{n}`
	},
	{
		"title": "QM-AM-GM-HM Inequality over 3 variables",
		"description": "cool-looking",
		"latex": String.raw`\sqrt{\frac{a^2 + b^2 + c^2}{3}} \ge \frac{a + b + c}{3} \ge \sqrt[3]{abc} \ge \frac{3}{\frac{1}{a} + \frac{1}{b} + \frac{1}{c}}`
	},
	{
		"title": "Extended Law of Sines",
		"description": "threw in the circumradius as well",
		"latex": String.raw`\frac{a}{\sin \angle A} = \frac{b}{\sin \angle B} = \frac{c}{\sin \angle C} = 2R`
	},
	{
		"title": "Integration by Parts",
		"description": "it's just the product rule really",
		"latex": String.raw`\int u\mathrm dv = uv - \int v \mathrm du`
	},
	{
		"title": "Definition of Perfect Numbers",
		"description": "shrug",
		"latex": String.raw`\left \{ n : \sum_{d | n}^{d<n} d  = n\right \}`
	},
	{
		"title": "Gaussian Integral",
		"description": "classic trick",
		"latex": String.raw`\int_{-\infty}^\infty e^{-x^2} \mathrm dx = \sqrt{\int_{-\infty}^\infty \int_{-\infty}^\infty  e^{-x^2 - y^2} \mathrm dx\mathrm dy} = \sqrt{\int_0^{2\pi} \int_0^\infty e^{-r^2}r\mathrm dr\mathrm d\theta } = \sqrt{\pi}`
	},
	{
		"title": "Definition of an Integral",
		"description": "why not",
		"latex": String.raw`\int_a^b f(x) \mathrm dx = \lim_{k \to \infty} \left ( (b-a) \sum_{i = 1}^{k} \frac{f(a + i\frac{b-a}{k})}{k} \right )`
	},
	{
		"title": "Quantum Fourier transform",
		"description": "bra ket notation is fun",
		"latex": String.raw`|x\rangle \mapsto \frac{1}{\sqrt{N}} \sum_{k = 0}^{N-1} \omega_x^k |k\rangle`
	},
	{
		"title": "Recursive definition of the Hadamard transform",
		"description": "matrix in cases",
		"latex": String.raw`H_m = \begin{cases} 1 & m = 0 \\ \frac{1}{\sqrt{2}}\begin{pmatrix} H_{m-1} & H_{m-1} \\ H_{m-1} & -H_{m-1}\end{pmatrix} & m > 0\end{cases}`
	},
	{
		"title": "Wigner Transform of the Density Matrix",
		"description": "I know some of these words",
		"latex": String.raw`W(x,p) = \frac{1}{\pi \hbar} \int_{-\infty}^\infty \langle x + y | \hat{\rho} | x - y \rangle e^{-2ipy/\hbar} \mathrm dy`
	},
	{
		"title": "Imaginary numbers",
		"description": "Just gonna add some simple formulas",
		"latex": String.raw`i^2 = -1`
	},
	{
		"title": "Sum of Cubes",
		"description": "Simple",
		"latex": String.raw`a^3 + b^3 = (a+b)(a^2 - ab + b^2)`
	},
	{
		"title": "RSA Decryption Algorithm",
		"description": "good ol' rivest",
		"latex": String.raw`m = c^{e^{-1}\bmod \phi(n)} \pmod n`
	},
	{
		"title": "Contraposition",
		"description": "logic yo",
		"latex": String.raw`(p \implies q) \iff (\neg q \implies \neg p)`
	},
	{
		"title": "Equation of a spring",
		"description": "Gonna use dots like the physicists do",
		"latex": String.raw`m \ddot{x} = -kx`
	},
	{
		"title": String.raw`Sum of reciprocals of partial sums of \(\ \mathbb{N}\)`,
		"description": "Credit to @IntertialObservr",
		"latex": String.raw`\sum_{i = 2}^\infty \frac{1}{\sum_{j = 1}^i j} = 1`
	},
	{
		"title": "Binet's Formula",
		"description": "Classic",
		"latex": String.raw`F_n = \frac{1}{\sqrt{5}} \left ( \varphi^n  - \frac{(-1)^n}{\varphi^n}\right )`
	},
	{
		"title": String.raw`Sum of first \(n\) Cubes`,
		"description": "Classic",
		"latex": String.raw`\sum_{k = 0}^n k^3 = \left ( \sum_{k = 0}^n k\right )^2`
	},
	{
		"title": "The Basel Problem",
		"description": "Classic",
		"latex": String.raw`\sum_{n = 1}^\infty \dfrac{1}{n^2} = \dfrac{\pi^2}{6}`
	},
	{
		"title": "Root Mean Square",
		"description": "how could i forget",
		"latex": String.raw`f_{\text{rms}} = \sqrt{\frac{1}{T_2 - T_1} \int_{T_1}^{T_2} [f(t)]^2 \mathrm dt}`
	},
	{
		"title": "The Harmonic Series",
		"description": "Classic",
		"latex": String.raw`\sum^\infty_{n=1} \frac{1}{n} = \infty`
	},
	{
		"title": "Tupper's Self-Referential Formula",
		"description": "Troll",
		"latex": String.raw`\frac{1}{2}<\left\lfloor\bmod\left(\left\lfloor\frac{y}{17}\right\rfloor 2^{-17\lfloor x \rfloor - \bmod(\lfloor y \rfloor,17)},2\right)\right\rfloor`
	},
	{
		"title": String.raw`H\(\ddot\textbf{o}\)lder's Inequality`,
		"description": "Styled like the OTIS handouts by Evan Chen",
		"latex": String.raw`\left(\sum_{i = 1}^n a_i\right)^p\left(\sum_{i = 1}^n b_i\right)^q \ge \left(\sum_{i = 1}^n \sqrt[p+q]{a_i^p b_i^q}\right)^{p+q}`
	},
	{
		"title": "Rearrangement Inequality",
		"description": "kinda cool",
		"latex": String.raw`a_1 \le a_2 \le \cdots \le a_n, b_1 \le b_2 \le \cdots \le b_n \implies \sum_{i=1}^n a_ib_i \ge \sum_{i=1}^n a_{\sigma(i)}b_i \ge \sum_{i=1}^n a_{n+1-i}b_i`
	},
	{
		"title": "Power Mean",
		"description": "like RMS-AM-GM-HM but like generalized",
		"latex": String.raw`M_r(x_1,x_2,\dots,x_n) = \begin{cases} \left(\frac{1}{n}\sum_{i=1}^n x_i^r\right)^{1/r} & r \ne 0 \\ \sqrt[n]{\prod_{i=1}^n x_i} & r = 0 \end{cases}`
	},
	{
		"title": "Law of Tangents",
		"description": "yes this actually exists",
		"latex": String.raw`\frac{a-b}{a+b} = \frac{\tan\left(\frac{\angle A - \angle B}{2}\right)}{\tan\left(\frac{\angle A + \angle B}{2}\right)}`
	},
	{
		"title": "Euler's Arctangent Identity",
		"description": "dammit euler OP",
		"latex": String.raw`\tan^{-1} \left(\frac{1}{x}\right) =  \tan^{-1} \left(\frac{1}{x+y}\right) + \tan^{-1}\left(\frac{y}{x^2 + xy + 1}\right)`
	},
	{
		"title": "The Dirichlet Convolution",
		"description": "bruh",
		"latex": String.raw`(f \ast g)(n) = \sum_{d | n} f(d)g\left(\frac{n}{d}\right)`
	},
	{
		"title": "Sum of a Row of Pascal's Triangle",
		"description": "not sure how else to word it",
		"latex": String.raw`\binom{n}{0} + \binom{n}{1} + \binom{n}{2} + \cdots + \binom{n}{n} = 2^n`
	},
	{
		"title": "Alternating Harmonic Series",
		"description": "First use of \ln",
		"latex": String.raw`1 - \frac 12 + \frac 13 - \frac 14 + \frac 15 - \cdots = \ln 2`
	},
	{
		"title": "Definitions of Catalan's Constant",
		"description": "Credit to /u/heropup",
		"latex": String.raw`G = \beta(2) = \sum_{k=0}^\infty \frac{(-1)^k}{(2k+1)^2} = \iint_{[0,1]^2} \frac{\mathrm dx \mathrm dy}{1 + x^2 y^2}`
	},
	{
		"title": String.raw`Series Representation of Ap\(\acute\textbf{e}\)ry's Constant`,
		"description": "Credit to /u/heropup",
		"latex": String.raw`\zeta(3) = \frac{5}{2} \sum_{n=1}^\infty \frac{(-1)^{n-1}}{n^3 \binom{2n}{n}}`
	},
	{
		"title": "Definition of the Euler-Mascheroni Constant",
		"description": "Credit to /u/heropup",
		"latex": String.raw`\gamma = \lim_{n \to \infty} \left(\sum_{k=1}^n \frac{1}{k} - \ln n \right) = \int_1^\infty  \left(\frac{1}{\lfloor x \rfloor } - \frac{1}{x} \right) \mathrm dx`
	},
	{
		"title": "Mertens' therorem",
		"description": "actually his third theorem",
		"latex": String.raw`\prod_{p \in \mathbb P}^n \left(1-\frac 1 p \right)\sim \frac{e^{-\gamma}}{\log n}`
	},
	{
		"title": "Green's First Identity",
		"description": "Credit to Varge",
		"latex": String.raw`\int_{\Omega} (\psi \Delta \varphi + \nabla \psi \cdot \nabla \varphi) \mathrm dV = \oint_{\partial \Omega} \psi(\nabla \varphi \cdot \mathbf{n}) \mathrm dS`
	},
	{
		"title": "Cauchy-Riemann Equations",
		"description": "complex analysis is best analysis (1); credit to blu_bird",
		"latex": String.raw`\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}`
	},
	{
		"title": "Cauchy's Integral Formula",
		"description": "complex analysis is best analysis (2); credit to blu_bird",
		"latex": String.raw`f(z_0) = \frac{1}{2\pi i}\oint_{\Gamma} \frac{f(z)}{z-z_0} \mathrm{d}z`
	},
	{
		"title": "Cauchy's Differentiation Formula",
		"description": "complex analysis is best analysis (3); credit to blu_bird",
		"latex": String.raw`f^{(k)}(z_0) = \frac{k!}{2\pi i}\oint_{\Gamma} \frac{f(z)}{(z-z_0)^{k+1}} \mathrm{d}z`
	},
	{
		"title": "Functional Equation for the Riemann-Zeta Function",
		"description": "This is the simplest example of a functional equation in the Langlands program. Conjecturally all Hasse-Weil zeta functions have Euler factorizations and functional equations with the Riemann zeta function as just one example.",
		"latex": String.raw`\pi^{-s/2}\Gamma\left(\frac{s}{2}\right)\zeta(s) = \pi^{-(1-s)/2}\Gamma\left(\frac{1-s}{2}\right)\zeta(1-s)`
	},
	{
		"title": "Well-ordering Principle",
		"description": "Classic. Credit to Eucrue",
		"latex": String.raw`\forall M(M\subset \mathbb N \wedge M \ne \emptyset \implies \exists m_0 [ m_0 \in M \wedge \forall n (n \in M \implies m \le n)])`
	},
	{
		"title": "Asymptotic Formula for the Dirichlet Divisor Function",
		"description": "very cool dirichlet",
		"latex": String.raw`\sum_{n \leq x} \tau(n) = x \log x + (2\gamma -1)x + O(\sqrt{x})`
	},
	{
		"title": "Prime Number Theorem",
		"description": "trivial",
		"latex": String.raw`\pi(x) \sim \frac{x}{\log x}`
	},
	{
		"title": "Cumulative Distribution Function of the Gaussian Distribution",
		"description": "dense",
		"latex": String.raw`\Phi(x) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^x e^{-t^2/2} \mathrm{d}t`
	},
	{
		"title": "Chernoff Bound",
		"description": "I never really learned what this was",
		"latex": String.raw`\mathbb{P}(X \ge t) \leq \frac{\mathbb{E}[e^{\lambda X}]}{e^{\lambda t}}`
	},
	{
		"title": "Union Bound",
		"description": "Never learned what this was either",
		"latex": String.raw`\mathbb{P}\left(\bigcup_{i=1}^n X_i\right) \leq \sum_{i=1}^n \mathbb{P}(X_i)`
	},
	{
		"title": "Law of Total Probability",
		"description": "shrug",
		"latex": String.raw`\mathbb{P}(A) = \sum_{i=1}^n \mathbb{P}(A| B_i)\mathbb{P}(B_i)`
	},
	{
		"title": "Linear Least Squares Estimator",
		"description": "i love regression analysis",
		"latex": String.raw`L[X|Y] = \mathbb{E}[X] + \frac{\mathrm{cov}(X,Y)}{\mathrm{var}(Y)} (Y-\mathbb{E}[Y])`
	},
	{
		"title": "Rademacher Complexity",
		"description": "The empirical Rademacher complexity of a function class",
		"latex": String.raw`\mathcal{R}_n(\mathcal{F}) = \mathbb{E}_{\varepsilon}\left[\sup_{f \in \mathcal{F}}\frac{1}{n}\sum_{i=1}^{n}\varepsilon_if(x_i) \right ]`
	},
	{
		"title": "Definition of the Dilogarithm",
		"description": "aka Spence's function. don't wanna be accused of sleeping on spence",
		"latex": String.raw`\mathrm{Li}_2(z) = -\int_0^z \frac{\log(1-t)}{t}\mathrm{d}t, z \in \mathbb C`
	},
	{
		"title": "Leibniz's Determinant Formula",
		"description": "Determinant of an n by n matrix",
		"latex": String.raw`\det(A)=\sum_{\sigma\in S_n} \epsilon(\sigma)\prod_{i=1}^n A_{i,\sigma(i)}`
	},
	{
		"title": "Euler-Lagrange Equations",
		"description": "The basis for all of Lagrangian mechanics",
		"latex": String.raw`\frac{\partial L}{\partial q_i}=\frac{\text d}{\text dt}\frac{\partial L}{\partial \dot{q_i}}`
	},
	{
		"title": "Definition of the Euler Totient Function",
		"description": "what does totient mean anyways?",
		"latex": String.raw`\varphi(n)=|\{k\in\mathbb{N}_{\leq n}|\gcd(k,n)=1\}|=n\prod_{p|n}\left(1-\frac1p\right)`
	},
	{
		"title": "Sum of Divisors",
		"description": "i guess this person likes multiplicative functions",
		"latex": String.raw`\sigma(n)=\sum_{d|n} d = \prod_{p^a||n}\left(\frac{p^{a+1}-1}{p-1}\right)`
	},
	{
		"title": "Einstein Field Equations",
		"description": "This form makes use of the Einstein tensor",
		"latex": String.raw`G_{\mu\nu}+\Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}`
	},
	{
		"title": "Second Fundamental Theorem of Calculus",
		"description": "credit to VBG",
		"latex": String.raw`\int_a^b f(x)\mathrm{d}x=[F(x)]_{a}^{b}=F(b)-F(a)`
	},
	{
		"title": "Abel's Summation Formula",
		"description": "unclear to me why this is at all useful tbh",
		"latex": String.raw`\sum_{x < n \leq y} a(n)f(n) = A(y)f(y) - A(x)f(x) - \int_x^y A(t)f'(t) \mathrm dt`
	}
];
