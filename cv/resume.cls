% Estilo compartido del CV (EN/ES).
% Basado en "Jake's Resume" de Jake Gutierrez (MIT), a su vez derivado de
% sb2nov/resume: https://github.com/jakegut/resume
%
% Pensado para ATS: una sola columna, fuentes Type 1 con mapeo Unicode,
% sin iconos ni tablas de maquetación, títulos de sección convencionales.
% Uso: \documentclass[en]{resume} o \documentclass[es]{resume}

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{resume}[2026/11/20 ATS-friendly one-column resume]

\newif\ifresume@es
\DeclareOption{en}{\resume@esfalse}
\DeclareOption{es}{\resume@estrue}
\ExecuteOptions{en}
\ProcessOptions\relax

\LoadClass[letterpaper,11pt]{article}

% --- Texto extraíble: acentos y ligaduras se copian como texto real ---------
\RequirePackage{iftex}
\ifPDFTeX
  \input{glyphtounicode}
  \pdfgentounicode=1
\fi
\RequirePackage[T1]{fontenc}
\RequirePackage[utf8]{inputenc}
\RequirePackage{lmodern}
\RequirePackage{microtype}
% Sin ligaduras "fi"/"fl" en el texto: algunos parsers las leen mal.
\DisableLigatures[f]{encoding = *, family = *}

\ifresume@es
  \RequirePackage[spanish,es-noshorthands,es-nodecimaldot]{babel}
\else
  \RequirePackage[english]{babel}
\fi

% --- Página ----------------------------------------------------------------
\RequirePackage[margin=0.55in,top=0.45in,bottom=0.45in]{geometry}
\RequirePackage{titlesec}
\RequirePackage{enumitem}
\RequirePackage[hidelinks]{hyperref}
\RequirePackage{xcolor}
\RequirePackage{tabularx}

\pagestyle{empty}
\raggedright
\setlength{\parindent}{0pt}
\setlength{\tabcolsep}{0in}
\urlstyle{same}

% Títulos de sección en versalitas con una línea debajo (texto plano para ATS).
\titleformat{\section}
  {\vspace{-5pt}\scshape\raggedright\large}
  {}{0em}{}[\color{black}\titlerule\vspace{-4pt}]

% --- Comandos ----------------------------------------------------------------
% \resumeHeading{Nombre}{línea de contacto}
\newcommand{\resumeHeading}[2]{%
  \begin{center}
    {\Huge\scshape #1}\\[4pt]
    \small #2
  \end{center}
  \vspace{-8pt}%
}

% \resumeEntry{Puesto}{Fechas}{Organización}{Lugar}
\newcommand{\resumeEntry}[4]{%
  \item
  \begin{tabular*}{\linewidth}[t]{l@{\extracolsep{\fill}}r}
    \textbf{#1} & #2 \\
    \textit{\small #3} & \textit{\small #4} \\
  \end{tabular*}\vspace{-6pt}%
}

% \resumeProject{Nombre | stack}{enlace}
\newcommand{\resumeProject}[2]{%
  \item
  \begin{tabular*}{\linewidth}[t]{l@{\extracolsep{\fill}}r}
    \small #1 & \small #2 \\
  \end{tabular*}\vspace{-6pt}%
}

\newcommand{\resumeItem}[1]{\item\small{#1\vspace{-2pt}}}

\newenvironment{entries}
  {\begin{itemize}[leftmargin=0.1in, label={}, itemsep=1pt]}
  {\end{itemize}}

\newenvironment{bullets}
  {\begin{itemize}[leftmargin=0.18in, label=\textbullet, itemsep=0pt, topsep=2pt]}
  {\end{itemize}\vspace{-3pt}}
