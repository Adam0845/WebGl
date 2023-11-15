class Light {

    constructor(parametrA, parametrB) {

        // przykładowe, nieobowiązkowe parametry konstruktora
        // przekazane podczas tworzenia obiektu klasy Light
        // np scena, kolor światła, wielkość bryły

        this.parametrA = parametrA
        this.parametrB = parametrB

        // dodatkowe zmienne tworzone w konstruktorze
        // widoczne w dalszych funkcjach

        this.zmienna = 0

        // pusty kontener na inne obiekty 3D

        this.container = new THREE.Object3D();

        //wywołanie funkcji init()

        this.init()
    }

    init() {

        // utworzenie i pozycjonowanie światła

        this.light = new THREE.SpotLight(0xff0000, 2, 500, Math.PI / 8);
        this.light.position.set(0, 0, 0); // ma być w pozycji 0,0,0 kontenera - nie zmieniamy!!!

        // dodanie światła do kontenera

        this.container.add(this.light);

        //utworzenie widzialnego elementu reprezentującego światło (mały sześcian, kula, czworościan foremny, do wyboru)
        const geometry = new THREE.BoxGeometry(5, 5, 5);
        const material = new THREE.MeshBasicMaterial({
            wireframe: true,
            side: THREE.DoubleSide, // dwustronny
            color: 0xffff00, // plik tekstury
            transparent: true, // przezroczysty / nie
            opacity: 0.8, // stopień przezroczystości

        })
        this.mesh = new THREE.Mesh(geometry, material)

        // dodanie go do kontenera

        this.container.add(this.mesh);
    }


    // funkcja zwracająca obiekt kontenera
    // czyli nasze światło wraz z bryłą

    getLight() {
        return this.container;
    }

    // przykład innej funkcji, np do zmiany koloru bryły, zmiany koloru światła, etc

    changeColor(color) {
        console.log("zmiana koloru na " + color)
    }

}