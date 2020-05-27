export default {
    data: function() {
        return {
            monster: {
                name: "",
                status: {
                    hp: 100,
                    currentHp: 100,
                    mp: 100,
                    currentMp: 100,
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
            },
            isPlayerTurnEnd: false,
            isMonsterTurnEnd: false,
            isShowCommand: false
        };
    },
    methods: {
        //モンスター管理
        $_setBattleMonster: function(list) {
            const max = list.length;
            const index = Math.floor(Math.random() * max);

            this.monster.name = list[index].name;
            this.monster.imgPath = list[index].imgPath;
            for (let i of Object.keys(list[index].status)) {
                this.monster.status[i] = list[index].status[i];
            }
            this.monster.status.currentHp = this.monster.status.hp;
            this.monster.status.currentMp = this.monster.status.mp;
        },

        // 戦闘管理
        $_turnStart: function() {
            this.isPlayerTurnEnd = false;
            this.isMonsterTurnEnd = false;
            console.log("戦闘開始");
            if (this.userObj.battleStatus.spd > this.monster.status.spd) {
                this.$_playerTurn();
            } else {
                this.$_monsterTurn();
            }
        },

        $_playerTurn: function() {
            this.isShowCommand = true;
        },
        $_monsterTurn: async function() {
            console.log("モンスター");
            this.$_setMonsterMotion("attack");
            this.$store.commit("decreaseHp", 50);
            await this.$_sleep(1000);
            this.isMonsterTurnEnd = true;
            if (this.isPlayerTurnEnd === false) {
                this.$_playerTurn();
            } else {
                this.$_turnStart();
            }
        },

        $_attack: async function(value) {
            this.isShowCommand = false;
            console.log("通常攻撃");
            this.monster.status.currentHp -= value;
            await this.$_sleep(1000);
            this.isPlayerTurnEnd = true;
            if (this.isMonsterTurnEnd === false) {
                this.$_monsterTurn();
            } else {
                this.$_turnStart();
            }
        },
        $_magic: async function(value) {
            this.isShowCommand = false;
            console.log("魔法攻撃");
            this.monster.status.currentHp -= value;
            this.$store.commit("decreaseMp", 20);
            await this.$_sleep(1000);
            this.isPlayerTurnEnd = true;
            if (this.isMonsterTurnEnd === false) {
                this.$_monsterTurn();
            } else {
                this.$_turnStart();
            }
        },
        $_recover: async function(value) {
            this.isShowCommand = false;
            console.log("回復魔法");
            this.$store.commit("decreaseHp", -100);
            this.$store.commit("decreaseMp", 20);
            await this.$_sleep(1000);
            this.isPlayerTurnEnd = true;
            if (this.isMonsterTurnEnd === false) {
                this.$_monsterTurn();
            } else {
                this.$_turnStart();
            }
        },

        //戦闘演出関係
        $_setMonsterMotion(motion) {
            this.monster.motion = motion;
        }
    }
};
