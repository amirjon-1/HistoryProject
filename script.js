const map = L.map('map', { scrollWheelZoom: false }).setView([42.7128, -73.2032], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


const points = [
    {
        "name": "Sacred Burial Grounds",
        "coords": [42.7002, -73.2145],
        "content": `
            <p>
            The Mohican people originally inhabited western Massachusetts and the Connecticut River Valley regions. These lands were vital for their survival as it was both a source of food and culture. The indigenous people highly respected the land as it was a form of knowledge and culture for them. This is also where the Mohican burial grounds are located, which are deeply sacred spaces where ancestors are honored. These grounds symbolized cycles of life and renewal which maintained the spiritual balance in the community. However due to colonization, many graves were destroyed, artifacts were stolen and the land was repurposed for farming and industrial purposes. Due to this the tribe faced disease, displacement and many acts of violence. Their territory shrank significantly, leading to a long period of displacement. The destruction of these lands is another act of colonial erasure, however repatriation efforts have been working towards solving these issues. The land acknowledgment by Williams college and the artifact retrieval efforts have been slowly rebuilding their cultural identity. 
            </p>
            <img src="assets/images/sacred_burial.jpg" alt="Art depicting sacred burial grounds" style="width: 100%;">
        `
    },
    {
        "name": "First Encounters with Dutch Traders and The Treaty of Albany",
        "coords": [42.7051, -73.2109],
        "content": `
            <p>
            In the early 1600s, Mohican people started to trade with Dutch settlers along the Hudson River, exchanging Wampum beads, belts, and other goods for European tools and firearms. These trades disrupted the traditional Mohican lifestyle and made them dependent on foreign goods. The settlers took control of this dependency which led to escalating tensions between them. Despite the Mohican people approaching the colonists on good terms, the exploitative nature of colonial systems destabilized the Indigenous society. Due to these tensions, the Treaty of Albany was established to restore peace between the two communities, but it rather led to settlers taking more land from the Mohicans. The treaty was violated multiple times, which forced the Mohican community to be displaced. The treaty was created to support settler interests, exploiting the Mohican community. 
            </p>
            <img src="assets/images/first_encounter.jpg" alt="Art depicting Mohican trade with settlers" style="width: 100%;">
        `
    },
    {
        "name": "Housatonic Valley Treaty (1736) and Loss of Housatonic Homelands",
        "coords": [42.7085, -73.2185],
        "content": `
            <p>
            Around the mid 1700s, the Mohicans signed the Housatonic Valley Treaty, which gave most of their homeland to settlers. Settlers promised compensation and protection, but it was never fulfilled. Sacred sites and villages were repurposed into farms and towns, moving the Mohican community out of their villages. There is a very big difference in how colonists and Mohicans viewed the land. Colonists believed it was just property that can be sold and altered. However Mohicans had a deep cultural connection to it. It was a part of their identity and when they were kicked out, they left a part of them behind. The only thing that kept this part of their culture alive was through oral tradition passing it down generations.

            </p>
            <img src="assets/images/housatonic_treaty.jpg" alt="Map showing Housatonic Valley lands ceded by the Mohicans" style="width: 100%;">
        `
    },
    {
        "name": "Stockbridge Mission",
        "coords": [42.7063, -73.2123],
        "content": `
            <p>
            Around the 1740s, the Stockbridge Mission was established to convert Mohican people to Christianity. This disrupted the original cultural practices, replacing them with European religious customs. Some Mohicans adopted Christianity, but others continued to resist, preserving their traditional beliefs. This shows how colonists used religion as a tool for control, but it also shows the resilience of the Mohican people, who continued to preserve their culture despite pressures. 
            </p>
            <img src="assets/images/stockbridge_mission.jpg" alt="Illustration of the Stockbridge Mission" style="width: 100%;">
        `
    },
    {
        "name": "Forced Relocation to Wisconsin and Menominee Reservation",
        "coords": [44.6795, -88.5843],
        "content": `
            <p>
            In the 1820s, the Mohican tribe was forced to relocate to Wisconsin, and this path is often referred to as the Trail West which was marked by starvation, disease, and death. They had a hard time adjusting to the environment due to the territory being too harsh for farming and there was still continued pressure from U.S. policies. Despite this, the Mohican people were able to adapt and continued to thrive through building community and continuing to preserve their language and culture. This relocation was sort of like another start for their tribe after displacement and pain. Wisconsin remains an important location for all generations of Mohicans. The place that is pointed on the map is the Menominee Reservation. The Menominee were another tribe known for their hospitality and they provided the Mohican community with a lot of support. The two tribes shared a lot of cultural ties, sticking together to resist pressure from the US government. The Menominee Reservation became a place where Mohican people could continue their traditions and pass them down. To this day the two tribes still have a strong connection.
            </p>
            <img src="assets/images/trail_west.jpg" alt="Art depicting the Trail West" style="width: 100%;">
        `
    },
    {
        "name": "Papscanee Island Restoration",
        "coords": [42.7075, -73.2155],
        "content": `
            <p>
                Papscanee Island, a sacred Mohican site along the Hudson River, is now the focus of restoration and Land Back efforts. 
                Tribal leaders are working to protect the island’s ecology and cultural significance, ensuring it remains a vital part of 
                Mohican heritage. <strong>Interpretation:</strong> The restoration of Papscanee Island reflects the resilience of the Mohican 
                people and their commitment to reclaiming ancestral lands for future generations.
            </p>
            <img src="assets/images/papscanee_restoration.jpg" alt="Papscanee Island restoration efforts" style="width: 100%;">
        `
    },
    {
        "name": "Modern Cultural Revival",
        "coords": [42.7010, -73.2015],
        "content": `
            <p>
                Today, the Stockbridge-Munsee Band of Mohican Indians leads efforts to revive language, culture, and traditions. Programs 
                teach the Mohican language to younger generations, ensuring its survival, while community art projects celebrate the blending 
                of traditional and modern practices. <strong>Interpretation:</strong> These efforts are a testament to the resilience of the 
                Mohican people, demonstrating how they continue to adapt and thrive while honoring their heritage.
            </p>
            <img src="assets/images/modern_resurgence.jpg" alt="Modern cultural revival efforts by the Mohicans" style="width: 100%;">
        `
    },
       
];


const curves = points.slice(0, -1).map((point, i) => {
    const nextPoint = points[i + 1];

    const midLat = (point.coords[0] + nextPoint.coords[0]) / 2;
    const midLng = (point.coords[1] + nextPoint.coords[1]) / 2;

    const offset = 0.3; 
    const deltaLat = nextPoint.coords[0] - point.coords[0];
    const deltaLng = nextPoint.coords[1] - point.coords[1];
    const offsetLat = -deltaLng * offset; 
    const offsetLng = deltaLat * offset;

    const controlPoint = [midLat + offsetLat, midLng + offsetLng];

    return [
        'M',
        point.coords,
        'Q',
        controlPoint, 
        nextPoint.coords, 
    ];
});


curves.forEach((path) => {
    L.curve(path, {
        color: '#555',
        weight: 4, 
        dashArray: '8, 12', 
    }).addTo(map);
});

let currentIndex = 0;
let markers = [];

function updateMap(index) {
    const point = points[index];
    map.flyTo(point.coords, 15, {
        duration: 1.5, 
        easeLinearity: 0.25, 
    });

    document.getElementById('point-title').textContent = `${point.name} (${point.timePeriod})`;
    document.getElementById('point-content').innerHTML = point.content;

    markers.forEach((marker, i) => {
        if (i === index) {
            marker.setIcon(L.icon({ iconUrl: 'human.png', iconSize: [25, 41] }));
        } else {
            marker.setIcon(L.icon({ iconUrl: 'location.png', iconSize: [25, 41] }));
        }
    });
}

points.forEach((point, index) => {
    const marker = L.marker(point.coords, {
        icon: L.icon({ iconUrl: 'images/marker.png', iconSize: [25, 41] })
    }).addTo(map);
    marker.on('click', () => {
        currentIndex = index;
        updateMap(currentIndex);
    });
    markers.push(marker);
});

updateMap(currentIndex);

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % points.length;
        updateMap(currentIndex);
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + points.length) % points.length;
        updateMap(currentIndex);
    }
});




    
   