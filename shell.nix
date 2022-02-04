{ pkgs ? import <nixpkgs> { } }:

with pkgs;

mkShell {
  buildInputs = [
    nodejs-16_x
    nodePackages.javascript-typescript-langserver
    nodePackages.npm
  ];
}
