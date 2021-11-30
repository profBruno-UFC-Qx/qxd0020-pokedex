import { pokemons } from "./models/pokemon"
import * as http from "http";
import { AddressInfo } from "net";

const server = http.createServer((req, res) => {
    console.log(`A resquest ${req.method} arrived to ${req.url}`);

    if (req.method === "GET") {
        if(req.url === "/pokemons") {
            let content = "";

            for (const pokemon of pokemons) {
                content +=`<tr>
                    <td>${pokemon.id}</td>
                    <td><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"><br>${pokemon.nome}</td>
                    <td>${pokemon.pvMax}</td>
                    <td>${pokemon.ataque}</td>
                    <td>${pokemon.defesa}</td>
                    <td>${pokemon.ataqueEspecial}</td>
                    <td>${pokemon.defesaEspecial}</td>
                    <td>${pokemon.velocidade}</td>
                </tr>`;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(
                `<html>
                    <body>
                        <table>
                            <caption>Pokedex</caption>
                            <thead>
                                <tr>
                                    <th> Id </th>
                                    <th> Nome </th>
                                    <th> PvMax </th>
                                    <th> Ataque </th>
                                    <th> Defesa </th>
                                    <th> Ataque Especial </th>
                                    <th> Defesa Especial </th>
                                    <th> Velocidade </th>
                                </tr>
                            </thead>
                            <tbody>
                            ${content}
                            </tbody>
                        </table>
                    </body>
                </html>
            `);
        }
    }
});
server.listen(8080, "127.0.0.1", () => {
    const { address, port } = server.address() as AddressInfo;
    console.log(`Server listening on http://${address}:${port} `)
});