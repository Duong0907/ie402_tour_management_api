CREATE TABLE users (
    id int PRIMARY KEY AUTO_INCREMENT,
    username NVARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(10) NOT NULL DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE points (
    id VARCHAR(20) PRIMARY KEY,
    longitude DECIMAL(30, 20) NOT NULL,
    latitude DECIMAL(30, 20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE tours (
    id VARCHAR(20) PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    date_start DATE NOT NULL,
    total_time VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    thumbnail_img VARCHAR(255) NOT NULL,
    zoom_val INT NOT NULL DEFAULT 15,
    center_point_id VARCHAR(20) NOT NULL,
    admin_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES users(id),
    FOREIGN KEY (center_point_id) REFERENCES points(id)
);

CREATE TABLE routes (
    id VARCHAR(20) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    tour_id VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (tour_id) REFERENCES tours(id)
);

CREATE TABLE regions (
    id VARCHAR(20) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE polygons (
    id VARCHAR(20) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE locations (
    id VARCHAR(20) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    type VARCHAR(50) NOT NULL DEFAULT 'point',
    icon VARCHAR(255),
    polygon_id VARCHAR(20),
    point_id VARCHAR(20),
    region_id VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (polygon_id) REFERENCES polygons(id),
    FOREIGN KEY (point_id) REFERENCES points(id)
);


CREATE TABLE tour_locations (
    tour_id VARCHAR(20) NOT NULL,
    location_id VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (tour_id, location_id),
    FOREIGN KEY (tour_id) REFERENCES tours(id),
    FOREIGN KEY (location_id) REFERENCES locations(id)
);

CREATE TABLE route_points (
    route_id VARCHAR(20) NOT NULL,
    point_id VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (route_id, point_id),
    FOREIGN KEY (route_id) REFERENCES routes(id),
    FOREIGN KEY (point_id) REFERENCES points(id)
);

CREATE TABLE polygon_points (
    polygon_id VARCHAR(20) NOT NULL,
    point_id VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (polygon_id, point_id),
    FOREIGN KEY (polygon_id) REFERENCES polygons(id),
    FOREIGN KEY (point_id) REFERENCES points(id)
);

CREATE TABLE polygon_regions (
    polygon_id VARCHAR(20) NOT NULL,
    region_id VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (polygon_id, region_id),
    FOREIGN KEY (polygon_id) REFERENCES polygons(id),
    FOREIGN KEY (region_id) REFERENCES regions(id)
)

CREATE TABLE tour_images (
    id VARCHAR(20) PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    tour_id VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (tour_id) REFERENCES tours(id)
);

CREATE TABLE bookings (
    id VARCHAR(20) PRIMARY KEY,
    user_id INT NOT NULL,
    tour_id VARCHAR(20) NOT NULL,
    status VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (tour_id) REFERENCES tours(id)
);

CREATE TABLE comments (
    id VARCHAR(20) PRIMARY KEY,
    rating INTEGER NOT NULL,
    user_id INT NOT NULL,
    tour_id VARCHAR(20) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (tour_id) REFERENCES tours(id)
);

