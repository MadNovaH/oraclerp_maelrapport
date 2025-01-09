content_page1 = [
    `<h3><strong>Rapport : Mael Ikihri</strong></h3><img src="public/img/spider.png" style="width: auto;height: 75%;" alt="">`,
    `
    <h3><strong>08 Janvier XXX ~ 22:35</strong></h3>
        <p>Une fois les rôles attribués, les troupes se sont mises en route vers les Landes Pourpres. La zone à explorer se trouvait près d'une ancienne forêt où une stèle d’invocation avait été signalée. En chemin, des signes d’activité inhabituelle devenaient évidents : les animaux locaux avaient fui, et des toiles d’araignées denses recouvraient une partie du terrain.</p>
        <p>Une fois arrivés à proximité de la stèle, nous avons immédiatement sécurisé le périmètre en éliminant les ogres qui la gardaient. Ces créatures semblaient agir sous l’influence d’une force extérieure. Pendant que nos troupes tenaient les environs, l'Archimage a entrepris ses analyses sur place, sous notre protection constante. Les premières observations ont révélé une activité magique intense dans les Landes Pourpres, bien que difficile à attribuer au Fel. La présence d'araignées anormales – notamment des spécimens de couleurs verte et bleutée – renforçait l’hypothèse d’une connexion avec une "divinité araignée".</p>
        <button onclick="PageSuivante(1)">Page Précédente</button>
    `,
    `
    <h3><strong>08 Janvier XXX ~ 23:25</strong></h3>
        <p>Le combat a été ardu. Les forces réunies des factions ont permis de neutraliser la menace, bien que plusieurs membres aient été blessés ou aient montré des signes de découragement face à l’intensité de cette bataille. À l’issue de cette confrontation, nous avons collecté des échantillons d'ADN et de sang de l’araignée pour des études futures.</p>
            <p>En comparant ces événements à ceux liés aux basilics dans la Marche de l’Ouest, nous pouvons supposer que d’autres divinités ou entités anciennes commencent à se manifester. Il est impératif de renforcer la surveillance dans les Landes Pourpres pour observer si l’activité anormale des araignées diminue. De plus, des investigations doivent être menées dans d'autres régions pour repérer d’éventuelles stèles d’invocation similaires.</p>
    <p>Enfin, si une nouvelle invasion devait survenir et que la position exacte de ces entités reste inconnue, les conséquences pourraient être catastrophiques. Une coopération étroite entre les différentes factions sera cruciale pour prévenir un tel scénario.</p>
        <button onclick="PageSuivante(2)">Page Précédente</button>
    `, 
];

content_page2 = [
    `<h3><strong>08 Janvier XXX ~ 22:15</strong></h3>
        <p>La mission a débuté par un regroupement à la Guilde des Aventuriers. L’appel à l’action avait rassemblé une large variété de factions, unies par une cause commune. Parmi elles, on comptait des gardes royaux mandatés par la royauté, des mages du Kirin Tor, des aventuriers indépendants, et même des bandits ayant répondu à l’appel, probablement pour des raisons qui leur étaient propres.</p>
        <p>Lors de ce rassemblement, les discussions ont été intenses pour désigner des chefs pour chaque faction. Après une évaluation rapide des compétences et des forces en présence, des leaders ont été nommés pour coordonner les opérations. Ces chefs avaient pour mission de veiller à la cohésion de leurs troupes respectives et d'assurer une communication fluide entre les différents groupes.</p>
        <button onclick="PageSuivante(2)">Page Suivante</button>`,
    `
    <p>Soudain, un portail s’est ouvert dans un arbre massif, révélant l’entrée d’une caverne. L’ordre a été donné de se préparer à entrer, et nous avons pénétré dans ce qui ressemblait à une antre naturelle. L’intérieur de la caverne était sombre et oppressant, rempli d’énormes œufs d’araignées et parcouru par des créatures aux teintes vives. Ces araignées, bien plus puissantes que les spécimens ordinaires, ont forcé les différents groupes à déployer toute leur force.</p>
    <p>Malgré la confusion initiale, nous avons réussi à progresser. La tâche suivante a été de récupérer trois artefacts mystérieux qui semblaient nécessaires pour ouvrir une grande porte verrouillée au cœur de la caverne.</p>
    <p>Derrière cette porte, nous avons rencontré une opposition sans précédent. Deux ogres noirs, d’une force extraordinaire et couverts de symboles étranges, protégeaient une araignée colossale à la carapace noire. Ses longues pattes et son apparence imposante suggéraient qu’elle pourrait être la fameuse "divinité araignée", mais cette hypothèse reste à confirmer par des analyses plus approfondies.</p>
    <button onclick="PageSuivante(3)">Page Suivante</button>`,
    `
    <img src="public/img/boss.png" style="width: auto;height: 70%;" alt="">`,
    
];

function PageSuivante(nb) {
    document.getElementById("page1").innerHTML = content_page1[nb - 1];
    document.getElementById("page2").innerHTML = content_page2[nb - 1];
};

setTimeout(function() {
    PageSuivante(1);
}, 10);
