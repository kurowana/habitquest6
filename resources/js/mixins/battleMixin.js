export default {
    data: function() {
        return {
            monster: {
                name: "",
                status: {
                    hp: 100,
                    atk: 10,
                    matk: 10,
                    def: 10,
                    mdef: 10,
                    spd: 10,
                    hit: 10,
                    avd: 10,
                    cri: 10
                },
                imgPath: "images/monster/akuma01.png",
                motion: "none",
                effect: "none"
            }
        };
    },
    methods: {
        $_setBattleMonster: function(list) {
            const max = list.length;
            const index = Math.floor(Math.random() * max);

            this.monster.name = list[index].name;
            this.monster.imgPath = list[index].imgPath;
            for (let i of Object.keys(list[index].status)) {
                this.monster.status[i] = list[index].status[i];
            }
        }
    }
};
