
-- tour 2 
-- location
-- center point for tour 2 
INSERT INTO points (id, longitude, latitude) VALUES 
("tour2-center", 106.697862, 10.774026);

-- point of location 1 2 3 of tour 2 
INSERT INTO points (id, longitude, latitude) VALUES 
("dinhdoclap_point" , 106.69798404050957, 10.772579421442781),
("chobenthanh_point" , 106.69918684361534, 10.769971148964832),
("baotangmythuat_point" , 106.69532597137638, 10.77702321487456);

-- tour2 - route1
INSERT INTO points (id, longitude, latitude) VALUES 
("tour2-r1-p1", 106.69452231450045, 10.77612602972707),
("tour2-r1-p2", 106.69474427666117, 10.775926767882806),
("tour2-r1-p3", 106.69605621411841, 10.774748916766491),
("tour2-r1-p4", 106.69613634511225, 10.774820059624044),
("tour2-r1-p5", 106.69617758407587, 10.774854642951546),
("tour2-r1-p6", 106.69712702478745, 10.773993971659255),
("tour2-r1-p7", 106.69763932670952, 10.773156722259634);

-- tour2 - route2
INSERT INTO points (id, longitude, latitude) VALUES 
("tour2-r2-p1" , 106.69763932670952, 10.773156722259634),
("tour2-r2-p2" , 106.69600138513465, 10.772114354182376),
("tour2-r2-p3" , 106.69529549802414, 10.771657222327113),
("tour2-r2-p4" , 106.69550997976462, 10.771198455488873),
("tour2-r2-p5" , 106.69597123808764, 10.771178975333918),
("tour2-r2-p6" , 106.69647622488415, 10.771150077946704),
("tour2-r2-p7" , 106.69655115909848, 10.771185814487252),
("tour2-r2-p8" , 106.69669930769268, 10.77118498738552),
("tour2-r2-p9" , 106.69792748840052, 10.771714271518382),
("tour2-r2-p10" , 106.69805486655426, 10.771785125162348),
("tour2-r2-p11" , 106.69818076273984, 10.771842929304388),
("tour2-r2-p12" , 106.69825621526901, 10.771881670837796),
("tour2-r2-p13" , 106.6983697062379, 10.77192778239021),
("tour2-r2-p14" , 106.69841530379111, 10.7719490266387),
("tour2-r2-p15" , 106.6984790062552, 10.771966977204134),
("tour2-r2-p16" , 106.69850616362146, 10.7719722470947),
("tour2-r2-p17" , 106.6987914836059, 10.771773143977788),
("tour2-r2-p18" , 106.69882299956183, 10.771733455085938),
("tour2-r2-p19" , 106.69884672743487, 10.771667534501164),
("tour2-r2-p20" , 106.69888142851367, 10.771536116444645),
("tour2-r2-p21" , 106.69898368773127, 10.771204771416015),
("tour2-r2-p22" , 106.6990279441804, 10.771040745610877),
("tour2-r2-p23" , 106.69930157267693, 10.770456289068925),
("tour2-r2-p24" , 106.69951480829332, 10.770109133083201);

-- tour
INSERT INTO tours 
(id, name, price, date_start, total_time, description, thumbnail_img, center_point_id, zoom_val, admin_id)
VALUES
("tour2", "Tour Dinh Độc Lập - Chợ Bến Thành - Bảo tàng mỹ thuật", 1000000, "2024-12-12", "4 ngày 3 đêm", "Tour tham quan 3 điểm đến nổi tiếng tại Thành phố Hồ Chí Minh", "https://static.hotdeal.vn/images/1598/1598345/500x500/356818-tour-sai-gon-city-tour-1-ngay-dinh-doc-lap-nha-tho-duc-ba-buu-dien-thanh-pho-cho-ben-thanh-khoi-hanh-hang-ngay-ko-phu-thu-cuoi-tuan.jpg", "tour2-center", 17, 1);

-- route 
INSERT INTO routes (id, name, description, tour_id) VALUES 
("tour2-route1", "Đường đi từ Dinh Độc Lập đến Chợ Bến Thành", "Đường đi từ Dinh Độc Lập đến Chợ Bến Thành", "tour2"),
("tour2-route2", "Đường đi từ Chợ Bến Thành đến Bảo tàng mỹ thuật", "Đường đi từ Chợ Bến Thành đến Bảo tàng mỹ thuật", "tour2");

-- route point
INSERT INTO route_points (route_id, point_id) VALUES 
("tour2-route1", "tour2-r1-p1"),
("tour2-route1", "tour2-r1-p2"),
("tour2-route1", "tour2-r1-p3"),
("tour2-route1", "tour2-r1-p4"),
("tour2-route1", "tour2-r1-p5"),
("tour2-route1", "tour2-r1-p6"),
("tour2-route1", "tour2-r1-p7"),
("tour2-route2", "tour2-r2-p1"),
("tour2-route2", "tour2-r2-p2"),
("tour2-route2", "tour2-r2-p3"),
("tour2-route2", "tour2-r2-p4"),
("tour2-route2", "tour2-r2-p5"),
("tour2-route2", "tour2-r2-p6"),
("tour2-route2", "tour2-r2-p7"),
("tour2-route2", "tour2-r2-p8"),
("tour2-route2", "tour2-r2-p9"),
("tour2-route2", "tour2-r2-p10"),
("tour2-route2", "tour2-r2-p11"),
("tour2-route2", "tour2-r2-p12"),
("tour2-route2", "tour2-r2-p13"),
("tour2-route2", "tour2-r2-p14"),
("tour2-route2", "tour2-r2-p15"),
("tour2-route2", "tour2-r2-p16"),
("tour2-route2", "tour2-r2-p17"),
("tour2-route2", "tour2-r2-p18"),
("tour2-route2", "tour2-r2-p19"),
("tour2-route2", "tour2-r2-p20"),
("tour2-route2", "tour2-r2-p21"),
("tour2-route2", "tour2-r2-p22"),
("tour2-route2", "tour2-r2-p23"),
("tour2-route2", "tour2-r2-p24");

-- tour1 - location
INSERT INTO locations (id, name, description, type, icon, point_id) 
VALUES 
("DinhDocLap", "Dinh Độc Lập", "Dinh Độc Lập là một tòa dinh thự tại Thành phố Hồ Chí Minh, từng là nơi ở và làm việc của Tổng thống Việt Nam Cộng hòa trước Sự kiện 30 tháng 4 năm 1975.", "point", "https://cdn-icons-png.flaticon.com/512/984/984038.png", "dinhdoclap_point"),
("chobenthanh", "Chợ Bến Thành", "Chợ Bến Thành là một ngôi chợ nằm tại quận 1, Thành phố Hồ Chí Minh. Chợ được khởi công xây dựng từ năm 1912, hình ảnh đồng hồ ở cửa nam của ngôi chợ này được xem là biểu tượng không chính thức của Thành phố Hồ Chí Minh.", "point" , "https://cdn-icons-png.flaticon.com/512/1198/1198352.png", "chobenthanh_point"),
("baotangmythuat", "Bảo tàng mỹ thuật", "Bảo tàng Mỹ thuật Thành phố Hồ Chí Minh tọa lạc tại số 97 Phó Đức Chính, Quận 1, Thành phố Hồ Chí Minh, Việt Nam; được thành lập năm 1987 và đi vào hoạt động năm 1991. Tòa nhà bao gồm 3 tầng, trưng bày các tác phẩm hội họa, điêu khắc, cổ vật có giá trị mỹ thuật cao.", "point", "https://cdn-icons-png.flaticon.com/512/5389/5389807.png", "baotangmythuat_point");

-- tour - location
INSERT INTO tour_locations (tour_id, location_id) VALUES 
("tour2", "DinhDocLap"),
("tour2", "chobenthanh"),
("tour2", "baotangmythuat");
