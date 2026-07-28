---
title: see-sharp-mcp
minititle: see-sharp-mcp
description: A Roslyn-powered Model Context Protocol server that gives LLM agents semantic understanding of C# codebases — find references, go to definitions, inspect type hierarchies, and surface compiler diagnostics.
descriptionPtBr: Servidor MCP (Model Context Protocol) baseado em Roslyn que dá a agentes de LLM entendimento semântico de código C# — busca de referências, navegação para definições, inspeção de hierarquia de tipos e diagnósticos do compilador.
pubDate: 2026-04-08
updatedDate: 2026-04-08
repoUrl: https://github.com/titosilva/see-sharp-mcp
tags:
- C#
- MCP
- Developer Tools
---

Servidor MCP construído sobre o mesmo motor de análise usado pelo Visual Studio, permitindo carregar soluções .NET inteiras e responder a consultas como find_references, go_to_definition, get_type_hierarchy e get_diagnostics. Suporta múltiplas soluções carregadas simultaneamente, com compilação em segundo plano e observação de arquivos em tempo real.
