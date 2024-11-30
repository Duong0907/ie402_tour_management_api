create_db_container:
	docker run -d -p 3306:3306 --name tour_management_db -e MYSQL_USER -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=tour_management mysql:8
