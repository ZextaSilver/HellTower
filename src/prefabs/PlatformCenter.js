// js file for platform object
class PlatformC extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);

    }

    update(){

        //initiate velocity : maybe implement random x movement later version
        this.body.velocity.x = 0;
        //velocity used for platform falling
        this.body.velocity.y = 0;
        //use to increase the dropping down speed of platform
        if(spdChk == 100){
            this.body.y += 2;
            spdChk = 0;
        }
       
        if(this.y > game.config.height + 49){
            this.reset();
            score += 5;
            spdChk += 5;
        }
    }

    // condition for platform constant rolling from top
    reset() {
        this.x = Math.floor( Math.random() * (779 - 389 + 1) + 389);
        this.y = 0;
    }
}