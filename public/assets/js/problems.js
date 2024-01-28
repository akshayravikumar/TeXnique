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
		"description": "Thanks to Martin for correcting this!",
		"latex": String.raw`\Phi(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}}`
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
		"latex": String.raw`\frac{\mathrm df}{\mathrm dx} = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}`
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
		"latex": String.raw`\frac{\partial L}{\partial q_i}=\frac{\mathrm d}{\mathrm dt}\frac{\partial L}{\partial \dot{q_i}}`
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
	},
	{
		"title": "Lagrange's Theorem",
		"description": "more group theory",
		"latex": String.raw`(G:H) = \frac{|G|}{|H|}`
	},
	{
		"title": "Catalan Numbers",
		"description": "A000108",
		"latex": String.raw`C_n = \sum_{k=1}^{n-1} C_kC_{n-k-1} = \frac{1}{n+1}\binom{2n}{n}`
	},
	{
		"title": "Ising Model Hamiltonian",
		"description": "Mathematical model of ferromagnetism",
		"latex": String.raw`H(\sigma )=-\sum _{\langle i,j\rangle }J_{ij}\sigma _{i}\sigma _{j}-\mu \sum _{j}h_{j}\sigma _{j}`
	},
	{
		"title": "Borwein Integral",
		"description": "The pattern famously breaks down after this integral.",
		"latex": String.raw`\int_0^\infty \frac{\sin(x)}{x}\frac{\sin(x/3)}{x/3}\cdots\frac{\sin(x/13)}{x/13}\mathrm dx=\frac{\pi}{2}`
	},
	{
		"title": "Wigner Semicircle Distribution",
		"description": "Essentially just a semicircle scaled to be a probability distribution.",
		"latex": String.raw`f(x)=\begin{cases}{2 \over \pi R^2}\sqrt{R^2-x^2}&-R\le x\le R\\ 0&|x|>R\end{cases}`
	},
	{
		"title": "Parseval Gutzmer Formula",
		"description": "Apply the Cauchy Integral Formula to derive",
		"latex": String.raw`f(z)=\sum_{k=0}^\infty a_kz^k\implies \frac{1}{2\pi}\int_0^{2\pi}|f(re^{i\theta})|^2\mathrm d\theta=\sum_{k=0}^\infty |a_kr^k|^2`
	},
	{
		"title": "Fubini's Theorem",
		"description": "switching the order of integration ftw",
		"latex": String.raw`\int _{X}\left(\int _{Y}f(x,y) \mathrm dy\right) \mathrm dx=\int _{Y}\left(\int _{X}f(x,y) \mathrm dx\right) \mathrm dy=\int _{{X\times Y}}f(x,y)\mathrm d(x,y)`
	},
	{
		"title": "Coarea Formula",
		"description": "A generalization of Fubini's theorem",
		"latex": String.raw`\int _{\Omega }g(x)|\nabla u(x)|\mathrm dx=\int _{\mathbb {R} }\left(\int _{u^{-1}(t)}g(x)\mathrm dH_{n-1}(x)\right)\mathrm dt`
	},
	{
		"title": "Equation of a Torus",
		"description": "yum, donuts",
		"latex": String.raw`(\sqrt{x^2 + y^2} - R)^2 + z^2 = r`
	},
	{
		"title": "Ampère-Maxwell law",
		"description": "credit to Andrija",
		"latex": String.raw`\nabla \times \mathbf{B} = \mu_0\left(\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)`
	},
	{
		"title": "Gauss's Flux Theorem (differential form)",
		"description": "guess we're doing all of Maxwell's equations now huh",
		"latex": String.raw`\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}`
	},
	{
		"title": "Gauss's law for Magnetism",
		"description": "I'll need to fix this once we discover magnetic monopoles.",
		"latex": String.raw`\nabla \cdot \mathbf{B} = 0`
	},
	{
		"title": "Maxwell–Faraday equation",
		"description": "induction",
		"latex": String.raw`\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}`
	},
	{
		"title": "Eigenvalue Formula",
		"description": "this yields the characteristic polynomial",
		"latex": String.raw`\det(\mathbf{A} - \lambda \mathbf{I}) = 0`
	},
	{
		"title": "Collatz Function",
		"description": "The conjecture is that repeated applications of this function always hit 1.",
		"latex": String.raw`f(n) = \begin{cases} n/2 & n \equiv 0 \pmod 2 \\ 3n + 1 & n \equiv 1 \pmod 2 \end{cases}`
	},
	{
		"title": "Gamma Function",
		"description": "A generalization of the factorial function",
		"latex": String.raw`\Gamma(z) = \int_0^\infty x^{z - 1}e^{-x} \mathrm dx`
	},
	{
		"title": "Laplace Transform",
		"description": "signals and systems baby",
		"latex": String.raw`\mathcal{L}\{f\}(s) = \int_0^\infty f(t) e^{-st} \mathrm dt`
	},
	{
		"title": "Taylor Series",
		"description": "When a = 0, it's a Maclaurin series",
		"latex": String.raw`f(x) = \sum_{n = 0}^\infty \frac{f^{(n)}(a)}{n!} (x - a)^n`
	},
	{
		"title": "Quaternion Multiplication Formula",
		"description": "Hamilton famously carved this formula into the stone of a bridge when he came up with it.",
		"latex": String.raw`\mathbf i^2 = \mathbf j^2 = \mathbf k^2 = \mathbf i\mathbf j\mathbf k = -1`
	},
	{
		"title": "General Solution to First-Order Linear Differential Equations",
		"description": "You can derive this with an integrating factor. ",
		"latex": String.raw`y = e^{-\int P(x) \mathrm dx} \int Q(x) e^{\int P(x) \mathrm dx} \mathrm dx + Ce^{-\int P(x)\mathrm dx}`
	},
	{
		"title": "Fibonacci Binomial Coefficients Identity",
		"description": "Sum up the shallow diagonals of Pascal's triangle to make Fibonacci numbers",
		"latex": String.raw`F_{n+1}=\binom n 0 +\binom {n-1}1+\binom{n-2}2+\cdots + \binom{n - \lfloor n/2 \rfloor }{\lfloor n/2 \rfloor}`
	},
	{
		"title": "Bellman Optimality Equation",
		"description": "Somehow connected to reinforcement learning! Credit to Constantine.",
		"latex": String.raw`V^{\pi*}(s)=  \max_a \{ {R(s,a) + \gamma \sum_{s'} P(s'|s,a) V^{\pi*}(s')} \}`
	},
	{
		"title": "Definition of a Well-founded Relation",
		"description": "R is well-founded iff every proper subset contains a minimal element with respect to R. Credit to Constantine.",
		"latex": String.raw`(\forall S \subseteq X) [S \neq \emptyset \implies (\exists m \in S) (\forall s \in S) \lnot(sRm)]`
	},
	{
		"title": "Estimation Lemma",
		"description": "Credit to Ben Napier.",
		"latex": String.raw`\left|\int_\gamma f(z) \mathrm dz\right|\leq L(\gamma) \sup_\gamma | f |`
	},
	{
		"title": "Chaitin's Constant",
		"description": "The probability that a randomly constructed program will halt.",
		"latex": String.raw`\Omega_{F} = \sum_{p \in P_F} 2^{-|p|}`
	},
	{
		"title": "Cauchy's Differentiation Formula",
		"description": "Credit to epm",
		"latex": String.raw`f^{(n)}(a) = \frac{n!}{2\pi i} \oint_{\gamma} \frac{f(z)}{(z-a)^{n+1}} \mathrm{d}z`
	},
	{
		"title": "Defintion of the Quasi-Stationary Distribution",
		"description": "Getting rid of absorbing states.",
		"latex": String.raw`\forall B \in \mathcal{B}(\mathcal{X}^a), \forall t \ge 0, P_\nu(Y_t\in B, T > t) = \nu(B)P_\nu(T>t)`
	},
	{
		"title": "Addition of Sound Levels in Decibels",
		"description": "50dB + 50dB --> ~53dB!",
		"latex": String.raw`L_{ab} = 10\log_{10}\left(10^{L_a/10}+10^{L_b/10}\right)`
	},
	{
		"title": "Fast-Growing Hierarchy",
		"description": "You wanna see some real speed?",
		"latex": String.raw`f_\alpha(n)=\begin{cases}n+1&\alpha=0\\f_\beta(n)&\alpha=\beta+1\\f_{\alpha[n]}(n)&\text{else}\end{cases}`
	},
	{
		"title": "Feigenbaum-Cvitanović Functional Equation",
		"description": "Damn, that's a mouthful.",
		"latex": String.raw`g(g(x)) = - \frac{1}{\alpha} g(\alpha x)`
	},
	{
		"title": "Dirac Equation",
		"description": "Relativistic wave equation. Credit to Leon.",
		"latex": String.raw`i \hbar \gamma^\mu \partial_\mu \psi - mc \psi = 0 `
	},
	{
		"title": "Feynman's Trick",
		"description": "Essentially differentiating under the integral sign; the given problem is extremely difficult to solve otherwise. Credit to Aarsh Chotalia.",
		"latex": String.raw`\int_0^\pi\ln(1-2\alpha\cos x+\alpha^2) \mathrm dx=2\pi\ln|\alpha|`
	},
	{
		"title": "Lorentz Factor",
		"description": "Time and length change by a factor of gamma when objects move near the speed of light.",
		"latex": String.raw`\gamma = \frac{1}{\sqrt{1-\frac{v^{2}}{c^{2}}}}`
	},
	{
		"title": "Time Dilation",
		"description": "Clocks moving at high speed will be observed to tick slower.",
		"latex": String.raw`\Delta t=\frac{\Delta t_{0}}{\sqrt{1-\frac{v^{2}}{c^{2}}}}`
	},
	{
		"title": "Gauss's Flux Theorem (integral form)",
		"description": "Use the divergence theorem to get to the differential form.",
		"latex": String.raw`\oiint_S\mathbf{E}\cdot\mathrm{d}\mathbf{A}=\frac{Q}{\varepsilon_{0}}`
	},
	{
		"title": "Doppler Effect",
		"description": "beep beep beep",
		"latex": String.raw`\frac{f_{o}}{f_{s}} = \frac{\lambda_{s}}{\lambda_{o}}= \frac{v\pm v_{o}}{v\mp v_{s}}`
	},
	{
		"title": "Bernoulli's Equation",
		"description": "I included just because it included this bonkers \varrho thingy. What was wrong with \rho??",
		"latex": String.raw`P_{1} + \varrho gy_{1} + \frac{1}{2} \varrho v_{1}^{2} = P_{2} + \varrho gy_{2} + \frac{1}{2} \varrho v_{2}^{2}`
	},
	{
		"title": String.raw`Relation between \(K_p\) and \(K_c\)`,
		"description": "Credit to Freddie Bullard.",
		"latex": String.raw`K_p = K_c(RT)^{\Delta n}`
	},
	{
		"title": "Van der Waals Equation",
		"description": "Generalization of the Ideal Gas Law.",
		"latex": String.raw`\left (P + a \frac{n^2}{V^2} \right ) ( V - nb) = nRT`
	},
	{
		"title": "Maxwell-Boltzmann Distribution",
		"description": "Don't have enough statistical mechanics formulas.",
		"latex": String.raw`f(v) = 4 \pi v^2 \left ( \frac {m}{2 \pi k T} \right )^{3/2} e^{-\frac{mv^2}{2k_BT}}`
	},
	{
		"title": "Cayley-Hamilton Theorem",
		"description": "Square matrices over commutative rings are annihilated by their own characteristic polynomial.",
		"latex": String.raw`p(\lambda) = \det (\lambda \mathbf{I}_n - \mathbf{A}) \implies p(\mathbf{A}) = 0`
	},
	{
		"title": String.raw`Chudnovsky's Formula for \(\pi\)`,
		"description": "This formula, based on a Ramanujan formula, was used to calculate pi to the tens of trillions of digits.",
		"latex": String.raw`\frac{1}{\pi} = 12 \sum^\infty_{k=0} \frac{(-1)^k (6k)! (545140134k + 13591409)}{(3k)!(k!)^3 (640320)^{3k + 3/2}}`
	},
	{
		"title": "Residue Theorem",
		"description": "Q: Why did the mathematician name her dog Cauchy? A: Because it left a residue at every pole.",
		"latex": String.raw`\frac{1}{2\pi i}\oint_\gamma f(z)\mathrm{d}z=\sum_{p\text{ pole}}\mathbf{I}(\gamma,p)\mathrm{Res}(f,p)`
	},
	{
		"title": "Center of Mass",
		"description": "In a uniform gravitation field, this is the same as the center of gravity.",
		"latex": String.raw`\mathbf{R} = \frac 1M \iiint_Q \rho(\mathbf{r}) \mathbf{r} \mathrm dV`
	},
	{
		"title": "The Fundamental Group of the Circle",
		"description": "It's isomorphic to the group of integers. Credit to fish.",
		"latex": String.raw`\pi_1(S^1) \cong \mathbb{Z}`
	},
	{
		"title": "Definition of the Operator Norm on a Finite Dimensional Banach Space.",
		"description": "Credit to Richik Chakraborty.",
		"latex": String.raw`\left \{ \frac{\| T(x) \|'}{\| x \|} : x \neq 0, x \in X \right \} \equiv \left \{ \| T(x) \|' : \| x \| = 1,  x \in X \right\}`
	},
	{
		"title": "Green's Theorem",
		"description": "Credit to Facejo.",
		"latex": String.raw`\oint_C (L \mathrm dx +M \mathrm  dy)=\iint_D \left(\frac{\partial M}{\partial x}-\frac{\partial L}{\partial y} \right) \mathrm dx \mathrm dy`
	},
	{
		"title": "Portfolio Variance",
		"description": "Used to compute the covariance of a portfolio made up of n different assets, if the single variances and covariances are known. Credit to Marco.",
		"latex": String.raw`\sigma^2_z = \left (\sum_{i=1}^n w^2_i  \sigma^2_i \right )+ 2 \left ( \sum_{i=1}^{n-1}\sum_{j = i+1}^n w_i w_j \sigma_{i, j} \right )`
	},
	{
		"title": "Newton's Method",
		"description": "Credit to https://github.com/lucasalavapena.",
		"latex": String.raw`x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}`
	},
	{
		"title": "Shannon Entropy",
		"description": "Credit to https://github.com/lucasalavapena.",
		"latex": String.raw`H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)`
	},
	{
		"title": "Pinsker's inequality",
		"description": "It's possible I'm off by a factor of two here.",
		"latex": String.raw`\|\mu - \nu\|_{\mathrm{ TV}} \le \sqrt{2 D_{\rm KL}(\mu\|\nu)}`
	},
	{
		"title": "Sackur-Tetrode equation",
		"description": "Entropy of monatomic ideal gas. Credit to Haydn Gwyn.",
		"latex": String.raw`\frac{S}{k_BN} = \ln\left[ \frac VN \left( \frac{4\pi m}{3h^2} \frac UN \right)^{3/2} \right] + \frac52`
	},
	{
		"title": "Condtional Entropy",
		"description": "The amount of information needed to describe the outcome of a random variable given the outcome of another variable.",
		"latex": String.raw`\mathrm H (Y|X)=-\sum_{x \in \mathcal X, y \in \mathcal Y}p(x,y)\log{\frac{p(x,y)}{p(x)}}`
	},
	{
		"title": "Force-Potential Relation",
		"description": "Force is defined as the negative gradient of the potential energy function. Credit to Mayank Kumar.",
		"latex": String.raw`\mathbf F=-\frac{\partial U}{\partial x}\hat{\mathbf i}-\frac{\partial U}{\partial y}\hat{\mathbf j}-\frac{\partial U}{\partial z}\hat{\mathbf k}=-\vec\nabla(U)`
	},
	{
		"title": "Beta Function",
		"description": "A special function that is closely related to the gamma function and to binomial coefficients. Credit to Salil Gokhale.",
		"latex": String.raw`B(x,y)=\int_{0}^{1}t^{x-1}(1-t)^{y-1} \mathrm{d}t`
	},
	{
		"title": "Moist Adiabatic Lapse Rate",
		"description": "The rate that the temperature falls with respect to altitude in a wet environment.",
		"latex": String.raw`\Gamma_{\mathrm{w}} = -\frac{\mathrm{d}T}{\mathrm{d}z} = g\frac{\left(1 + \frac{H_{\mathrm{v}} r}{R_{\mathrm{sd}} T}\right)}{\left(c_{\mathrm{pd}} + \frac{H_{\mathrm{v}}^2 r}{R_{\mathrm{sw}} T^2}\right)}`
	},
	{
		"title": "Cardano's Formula",
		"description": "Solution for a depressed cubic. Credit to TetanicRain7592.",
		"latex": String.raw`\sqrt[3]{-\frac{q}{2} + \sqrt{\frac{q^{2}}{4} + \frac{p^{3}}{27}}} + \sqrt[3]{-\frac{q}{2} - \sqrt{\frac{q^{2}}{4} + \frac{p^{3}}{27}}}`
	},
	{
		"title": "General Cubic Formula",
		"description": "The deltas represents the cubic's discriminants. You must choose /any/ cube root and /any/ square root that doesn't result in C = 0. Credit to TetanicRain7592.",
		"latex": String.raw`C = \sqrt[3]{\frac{\Delta_{1} \pm \sqrt{\Delta_{1}^{2} - 4\Delta_{0}^{3}}}{2}}`
	},
	{
		"title": "Riemann Zeta Function",
		"description": "This formula works when the real part of s is greater than 1. Other cases require analytic continuation.",
		"latex": String.raw`\zeta(s)=\frac1{\Gamma (s)}\int_0^\infty\frac{x^{s-1}}{e^x-1}\mathrm dx`
	},
	{
		"title": "Tangent Sum of Angles Formula",
		"description": "Credit to TetanicRain7592.",
		"latex": String.raw`\tan(\alpha \pm \beta) = \frac{\tan(\alpha) \pm \tan(\beta)}{1 \mp \tan(\alpha)\tan(\beta)}`
	},
	{
		"title": "Inner Product of Continuous Complex Valued Functions",
		"description": "Credit to Zeus Hernández.",
		"latex": String.raw`\langle f,g\rangle=\int_{0}^{2\pi}f(t)\overline{g(t)}\mathrm{d}t`
	},
	{
		"title": "Definition of a Psuedorandom Generator",
		"description": "Crypto means Cryptography!",
		"latex": String.raw`\left | \Pr_{x \leftarrow \{0,1\}^k} [\mathcal A (G(x)) = 1] - \Pr_{x \leftarrow \{0,1\}^{p(k)}} [\mathcal A (x) = 1]\right | < \mu(k)`
	},
	{
		"title": "Generalized Stokes' theorem",
		"description": "One theorem to rule them all",
		"latex": String.raw`\int_{\partial M} \omega = \int_M \mathrm{d} \omega`
	},
	{
		"title": "Cartan's magic formula",
		"description": "A cool little magic trick",
		"latex": String.raw`\mathcal{L}_X = \mathrm{d} \circ \iota_X + \iota_X \circ \mathrm{d}`
	}
];
