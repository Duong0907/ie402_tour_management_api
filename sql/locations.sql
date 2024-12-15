-- point of location 1 2 3 of tour 2 
INSERT INTO points (id, longitude, latitude) VALUES 
("dinhdoclap_point" , 106.69798404050957, 10.772579421442781),
("chobenthanh_point" , 106.69918684361534, 10.769971148964832),
("baotangmythuat_point" , 106.69532597137638, 10.77702321487456),
("hoiquantuethanh_point", 106.66115901196024, 10.753282384860036),
("chobinhtay_point", 106.65110697269914, 10.749369777108885),
("nhathoducba_point", 106.69900314560947, 10.77979838838446),
("baotanglichsu_point", 106.70423373542376, 10.787016499168526),
("nhahatlon_point", 106.70323031876632, 10.776734871783667),
("thaocamvien_point", 106.707318583769, 10.787492984812967),
("phodiboNH_point", 106.70362070226372, 10.774102280886174),
("phodiboBV_point", 106.69307866425368, 10.767160797402203),
("duongsachNVB_point", 106.7001365299423, 10.781022384043924),
("bennharong_point", 106.70689899773394, 10.768081255184208),
("benbachdang_point", 106.70696538955154, 10.775697976374769),
("baotangchiendichhcm_point", 106.70426576165795, 10.78695996758415);

INSERT INTO locations (id, name, description, type, icon, point_id) 
VALUES 
("DinhDocLap", "Dinh Độc Lập", "Dinh Độc Lập là một tòa dinh thự tại Thành phố Hồ Chí Minh, từng là nơi ở và làm việc của Tổng thống Việt Nam Cộng hòa trước Sự kiện 30 tháng 4 năm 1975.", "point", "https://cdn-icons-png.flaticon.com/512/984/984038.png", "dinhdoclap_point"),
("ChoBenThanh", "Chợ Bến Thành", "Chợ Bến Thành là một ngôi chợ nằm tại quận 1, Thành phố Hồ Chí Minh. Chợ được khởi công xây dựng từ năm 1912, hình ảnh đồng hồ ở cửa nam của ngôi chợ này được xem là biểu tượng không chính thức của Thành phố Hồ Chí Minh.", "point" , "https://cdn-icons-png.flaticon.com/512/1198/1198352.png", "chobenthanh_point"),
("BaoTangMyThuat", "Bảo tàng mỹ thuật", "Bảo tàng Mỹ thuật Thành phố Hồ Chí Minh tọa lạc tại số 97 Phó Đức Chính, Quận 1, Thành phố Hồ Chí Minh, Việt Nam, được thành lập năm 1987 và đi vào hoạt động năm 1991. Tòa nhà bao gồm 3 tầng, trưng bày các tác phẩm hội họa, điêu khắc, cổ vật có giá trị mỹ thuật cao.", "point", "https://cdn-icons-png.flaticon.com/512/5389/5389807.png", "baotangmythuat_point"),
("HoiQuanTueThanh", "Hội quán Tuệ Thành", "Hội quán Tuệ Thành (chữ Hán: 穗城會館), thường được gọi là Miếu Thiên Hậu hay Chùa Bà Chợ Lớn, là một cơ sở tín ngưỡng thờ Thiên Hậu Thánh mẫu", "point", "https://cdn-icons-png.flaticon.com/512/3546/3546629.png", "hoiquantuethanh_point"),
("ChoBinhTay", "Chợ Bình Tây", "Chợ Bình Tây là một ngôi chợ nằm ở quận 6, thành phố Hồ Chí Minh, Việt Nam. Chợ được xây dựng vào năm 1928, là nơi mua bán các loại hàng hóa của người Hoa ở Sài Gòn.", "point", "https://cdn-icons-png.flaticon.com/512/862/862819.png", "chobinhtay_point"),
("NhathoDucBa", "Nhà thờ Đức Bà Sài Gòn", "Nhà thờ chính tòa Đức Bà Sài Gòn, thường được gọi tắt là Nhà thờ Đức Bà, là nhà thờ chính tòa của Tổng giáo phận Sài Gòn. Nhà thờ không chỉ là biểu tượng của Công giáo ở Việt Nam, mà còn là một trong những công trình kiến trúc độc đáo của Thành phố Hồ Chí Minh và điểm đến nổi tiếng với du khách.", "point", "https://cdn-icons-png.flaticon.com/512/3891/3891873.png", "nhathoducba_point"),
("BaoTangLichSu", "Bảo tàng Lịch sử Việt Nam", "Bảo Tàng Lịch Sử Việt Nam, tọa lạc tại số 16 Lê Duẩn, Phường Bến Nghé, Quận 1, Hồ Chí Minh, là một trong những địa điểm văn hóa, lịch sử nổi bật của thành phố. Nơi đây lưu giữ và trưng bày hơn 30.000 hiện vật có giá trị, phản ánh lịch sử phát triển của dân tộc Việt Nam từ thời kỳ tiền sử đến hiện đại. Bảo tàng được xây dựng trong một tòa nhà cổ kính, mang đậm dấu ấn kiến trúc Pháp, tạo không gian vừa trang nghiêm, vừa gần gũi với du khách. Với các phòng trưng bày rộng rãi, bảo tàng không chỉ là điểm đến lý tưởng cho những người yêu thích lịch sử, mà còn là nơi học hỏi và khám phá các giai đoạn quan trọng trong quá trình dựng nước và giữ nước của Việt Nam.", "point", "https://cdn-icons-png.flaticon.com/512/5389/5389807.png", "baotanglichsu_point"),
("NhaHatLon", "Nhà hát lớn Thành phố Hồ Chí Minh", "Nhà Hát Lớn TP. Hồ Chí Minh, nằm tại số 7 Công trường Lam Sơn, Quận 1, là một công trình kiến trúc nổi bật, mang đậm dấu ấn văn hóa và lịch sử của thành phố. Được xây dựng từ năm 1897 theo phong cách kiến trúc tân cổ điển, nhà hát này từng được gọi là Nhà Hát Opera thành phố Sài Gòn dưới thời Pháp thuộc. Với mặt tiền ấn tượng, các cột trụ lớn và chi tiết trang trí tinh xảo, Nhà Hát Lớn không chỉ là một công trình kiến trúc đẹp mà còn là biểu tượng của sự giao thoa giữa văn hóa phương Đông và phương Tây.", "point", "https://cdn-icons-png.flaticon.com/512/5626/5626901.png", "nhahatlon_point"),
("ThaoCamVien", "Thảo Cầm Viên Sài Gòn", "Thảo Cầm Viên Sài Gòn, là một trong những sở thú lâu đời nhất thế giới, được thành lập từ năm 1864. Nơi đây không chỉ là ngôi nhà của hàng trăm loài động thực vật quý hiếm mà còn là điểm đến thư giãn và học tập hấp dẫn cho mọi lứa tuổi.", "point", "https://cdn-icons-png.flaticon.com/512/7843/7843758.png", "thaocamvien_point"),
("PhoDiBoNguyenHue", "Phố đi bộ Nguyễn Huệ", "Phố đi bộ Nguyễn Huệ, TP. Hồ Chí Minh, là một địa điểm sôi động và hiện đại, thu hút du khách và người dân địa phương. Với không gian rộng rãi, các hoạt động nghệ thuật đường phố, cùng hàng loạt quán cà phê và nhà hàng xung quanh, nơi đây trở thành điểm đến lý tưởng để vui chơi và thư giãn.", "point", "https://cdn-icons-png.flaticon.com/512/1901/1901442.png", "phodiboNH_point"),
("PhoTayBuiVien", "Khu Phố Tây Bùi Viện", "Phố Bùi Viện, TP. Hồ Chí Minh, là khu phố Tây nổi tiếng với không khí sôi động và náo nhiệt, đặc biệt vào buổi tối. Đây là điểm đến lý tưởng cho những ai yêu thích trải nghiệm văn hóa đường phố, ẩm thực đa dạng, và các hoạt động giải trí về đêm.", "point", "https://cdn-icons-png.flaticon.com/512/3775/3775607.png", "phodiboBV_point"),
("DuongSachNguyenVanBinh", "Đường Sách Nguyễn Văn Bình", "Khác xa sự xô bồ, tấp nập của những con đường kế cận, đường sách mang đến cho du khách cảm giác yên bình và thư thái. Bạn có thể ghé thăm những quán cà phê sách có thiết kế độc đáo và sáng tạo như Bản Coffee hay Phương Nam Coffee Book. Không chỉ sở hữu khoảng view ấn tượng, đây còn là nơi để bạn gặp gỡ những người bạn có cùng đam mê đọc sách.", "point", "https://cdn-icons-png.flaticon.com/512/8832/8832880.png", "duongsachNVB_point"),
("BenNhaRong", "Bến Nhà Rồng", "Số 1 Đ. Nguyễn Tất Thành, Phường 13, Quận 4, Hồ Chí Minh, Vietnam", "point", "https://cdn-icons-png.flaticon.com/512/4545/4545018.png", "bennharong_point"),
("BenBachDang", "Bến Bạch Đằng", "Số 1 Tôn Đức Thắng, Bến Nghé, Quận 1, Hồ Chí Minh, Vietnam", "point", "https://cdn-icons-png.flaticon.com/512/4686/4686217.png", "benbachdang_point"),
("BaoTangChienDichHCM", "Bảo tàng chiến dịch Hồ Chí Minh", "Số 2 Lê Duẩn, Bến Nghé, Quận 1, Hồ Chí Minh, Vietnam", "point", "https://cdn-icons-png.flaticon.com/512/8832/8832880.png", "baotangchiendichhcm_point");

