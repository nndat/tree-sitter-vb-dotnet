/**
 * @file Tree sitter grammar for VB.NET
 * @author CodeAnt AI <chinmay@codeant.ai>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "tree_sitter_vb_dotnet",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
