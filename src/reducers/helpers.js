import characters_json from '../data/characters.json';

export function createCharacter(id) {
  let character = characters_json.find(x => x.id === id);
  return character;
}

