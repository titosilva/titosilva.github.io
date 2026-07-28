---
title: basilar
minititle: basilar
description: An assembler and linker for a symbolic assembly language, written in C++ using parser combinators, with preprocessing, object code generation, and cross-module symbol resolution.
descriptionPtBr: Montador e ligador para uma linguagem assembly simbólica, escritos em C++ usando parser combinators, com pré-processamento, geração de código objeto e resolução de símbolos entre módulos.
pubDate: 2024-06-13
updatedDate: 2024-09-13
repoUrl: https://github.com/titosilva/basilar
tags:
- C++
- Compilers
- Parsing
---

Projeto acadêmico de construção de um montador (assembler) completo: modo de pré-processamento, geração de arquivos objeto e um ligador (linker) capaz de combinar múltiplos módulos em um executável final. O parser é construído com parser combinators, evitando geradores de parser tradicionais e explorando a composição de parsers menores.
