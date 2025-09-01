export type InventoryItem = {
    id: string;
    name: string;
    description: string;
    quantity: number;
    icon: string;
    price: number;
    rating?: number; // Optional property for item rating
    tags?: string[]; // Optional property for item tags
};

export type Inventory = {
    [key: string]: InventoryItem;
}

export const inventoryList:Inventory = {
    "1": {
        id: "1",
        name: "Radio",
        description: "Radio Device used to listen to music and news",
        quantity: 0,
        icon: "https://www.shutterstock.com/shutterstock/photos/2433673599/display_1500/stock-vector--radio-wireless-marvel-amplifying-voices-music-news-globally-instant-communication-cultural-2433673599.jpg",
        price: 50,
        rating: 4.5,
        tags: ["electronics", "music", "communication"]
    },
    "2": {
        id: "2",
        name: "Camera",
        description: "Device used to Captue the Images in High Resolution",
        quantity: 0,
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/LEI0440_Leica_IIIf_chrom_-_Sn._580566_1951-52-M39_Blitzsynchron_front_view-6531_hf-.jpg",
        price: 150,
        rating: 4.8,
        tags: ["photography", "electronics", "high-resolution"]
    },
    "3": {
        id: "3",
        name: "Mobile Phone",
        description: "Device used to make calls and send messages",
        quantity: 0,
        icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/Intel_Smartphone_Reference_Design.jpg",
        price: 600,
        rating: 4.2,
        tags: ["mobile", "communication", "smartphone","electronics","bluetooth"]
    },
    "4": {
        id: "4",
        name: "Laptop",
        description: "Portable computer for work and entertainment",
        quantity: 0,
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Apple_MacBook_Air_13.3.jpg",
        price: 850,
        rating: 4.7,
        tags: ["electronics", "computer", "portable", "work", "entertainment"]
    },
    "5": {
        id: "5",
        name: "Smart Watch",
        description: "Wearable device for fitness tracking and notifications",
        quantity: 0,
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_Watch_Series_6.jpg",
        price: 125,
        rating: 4.3,
        tags: ["wearable", "fitness", "electronics", "bluetooth","watch","smart"]
    },
    "6": {
        id: "6",
        name: "Bluetooth Speaker",
        description: "Wireless speaker for music playback",
        quantity: 0,
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/JBL_Bluetooth_Speaker.jpg",
        price: 85,
        rating: 4.6,
        tags: ["electronics", "music", "wireless", "bluetooth", "speaker"]
    },
    "7": {
        id: "7",
        name: "Smart TV",
        description: "Television with internet connectivity and apps",
        quantity: 0,
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Samsung_Smart_TV.jpg",
        price: 899,
        rating: 4.9,
        tags: ["electronics", "television", "smart", "internet","bluetooth"]
    },
    "8": {
        id: "8",
        name: "Gaming Console",
        description: "Device for playing video games",
        quantity: 0,
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Xbox_One_Console.jpg",
        price: 249,
        rating: 4.4,
        tags: ["gaming", "electronics", "console", "game", "entertainment"]
    }
};

export const getItem = (id: string): InventoryItem | null => {
    return inventoryList[id] || null;
}