{ pkgs ? import <nixpkgs> { } }:

with pkgs;

mkShell {
  buildInputs = [
    nodejs-16_x
    nodePackages.typescript
    nodePackages.typescript-language-server
    nodePackages.npm
  ];
  shellHook = ''
    $(cat .env)
  '';
}
