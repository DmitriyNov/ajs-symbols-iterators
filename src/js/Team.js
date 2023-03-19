import Character from './Character';

export default class Team {
  constructor(value) {
    this.value = value;
  }

  [Symbol.iterator]() {
    const value = this.value;
    let index = 0;
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    const names = ['Исьа', 'Стиенс', 'Трастронун', 'Еран', 'Гагаллим', 'Бертрам'];
    return {
      next() {
        const name = names[Math.floor(Math.random() * 6)];
        const type = types[Math.floor(Math.random() * 6)];
        const attack = Math.floor(Math.random() * (50 - 10) + 10);
        const defence = Math.floor(Math.random() * (50 - 10) + 10);
        const character = new Character(name, type, attack, defence);
        if (index < value) {
          index++;
          return {
            done: false,
            value: character,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
