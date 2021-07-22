// Jukebox: Design a musical jukebox using object-oriented principles.

const standard_input = process.stdin;
standard_input.setEncoding('utf-8');

class JukeBox {
    constructor(){
        this.money = 0;
        // list of all songs offered by jukebox;
        this.songs = [
            {
                name: 'Stay',
                artist: 'The Kid Laroi'
            },
            {
                name: 'The Jackie',
                artist: 'Bas'
            },
            {
                name: 'Hotline Bling',
                artist: 'Drake'
            }
        ];
    }

    getMoney(){
        return this.money;
    }
    
    setMoney(newAmount){
        this.money = newAmount;
    }

    getSongs(){
        return this.songs;
    }

    isSongPickGood(input){
        if(input !== NaN || input>=this.getSongs().length || input < 0){
            console.log('Please make sure the index is in range');
            return false;
        } else {
            return true;
        }
    }

    pickSong(){
        console.log(this.getSongs());
        console.log('Please enter the index of the song you want to listen to.');
        let input;
        let badInput = true;
        while(badInput){
            input = this.handleUserInput();
            input = parseInt(input);
            if(this.isSongPickGood(input)){
                badInput = false;
                input = parseInt(input);
            }
        }
        return input;
    }

    playSong(song){
        console.log(`Currently playing ${song.name} by ${song.artist}`);
    }

    decreaseMoney(){
        this.money-=1;
    }

    increaseMoney(input){
        let val = parseInt(input);
        if(!isNaN(val)){
            this.setMoney(this.getMoney()+val);
        }
    }

    handleUserInput(){
        let input;
        standard_input.on('data', function (data) {
            input = data;
            if(input !== undefined){
                process.exit();
            }
        });
        return input;
    }

    run(){
        console.log('Hi this is jukebox. Please enter atleast $1 to play music or enter exit to quit.');
        let input;
        while(input !== 'exit\n'){
            input = this.handleUserInput();
            this.increaseMoney(input);
            if(this.getMoney() < 1){
                console.log(`You have $${this.money} inserted. Please enter atleast $1 or enter exit to quit.`);
            } else {
                const songIndex = this.pickSong();
                this.decreaseMoney();
                this.playSong(this.getSongs()[songIndex]);
            }
        }
        console.log("Thanks for using jukebox :).");
    }
}

let jukebox = new JukeBox();
jukebox.run();
