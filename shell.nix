{ pkgs ? import <nixpkgs> { } }:

with pkgs;

mkShell {
  buildInputs = [
    nodejs-16_x
    nodePackages.npm
  ];
  shellHook = ''
    $(cat .env)
  '';
}
