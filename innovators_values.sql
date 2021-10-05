SELECT * FROM centie.innovators;

SELECT MAX(innovator_like) FROM centie.innovators;

-- gets the row with highest likes
SELECT  innovator_id, innovator_fname, innovator_lname, innovator_story, innovator_date, innovator_picture
FROM centie.innovators
WHERE innovator_like = (SELECT MAX(innovator_like) FROM centie.innovators) LIMIT 1;
        
SELECT  * FROM centie.innovators WHERE innovator_isTop = false LIMIT 3;

UPDATE centie.innovators SET innovator_like = innovator_like + 1 WHERE innovator_id = 6;
        
ALTER TABLE innovators
MODIFY innovator_like INT;

INSERT INTO innovators (
innovator_fname, 
innovator_lname,
innovator_story, 
innovator_title, 
innovator_date, 
innovator_like, 
innovator_isTop, 
innovator_picture) 
VALUES('Emily', 'Yabut', 'Imagination is more important that knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.','Innovator Title' , '1997-01-02', 0, true, "https://i.imgur.com/UYcHkKD.png"),
('Nitzel', 'Paruan', 'This is description 2','Innovator Title 2' , '1997-01-02', 0, false, "https://i.imgur.com/UYcHkKD.png"),
('Jim', 'Trillana', 'This is description 3','Innovator Title 3' , '2003-06-04', 0, false, "https://i.imgur.com/UYcHkKD.png"),
('Shelly', 'Ancheta', 'This is description 4','Innovator Title 4' , '2020-11-07', 0, false, "https://i.imgur.com/UYcHkKD.png"),
('Roosevelt', 'Garcia', 'This is description 5','Innovator Title 5' , '2017-12-01', 0, false, "https://i.imgur.com/UYcHkKD.png"),
('Maga', 'Magadia', 'This is description 6','Innovator Title 6' , '2003-03-03', 0, false, "https://i.imgur.com/UYcHkKD.png");

UPDATE centie.innovators SET innovator_like = 85 WHERE innovator_id = 3;
UPDATE centie.innovators SET innovator_like = 77 WHERE innovator_id = 2;
UPDATE centie.innovators SET innovator_like = 100 WHERE innovator_id = 1;
UPDATE centie.innovators SET innovator_like = 98 WHERE innovator_id = 4;
UPDATE centie.innovators SET innovator_like = 50 WHERE innovator_id = 5;
UPDATE centie.innovators SET innovator_like = 32 WHERE innovator_id = 6;

UPDATE centie.innovators SET innovator_story = 'Description 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' WHERE innovator_id = 2;
UPDATE centie.innovators SET innovator_story = 'Description 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' WHERE innovator_id = 3;
UPDATE centie.innovators SET innovator_story = 'Description 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' WHERE innovator_id = 4;
UPDATE centie.innovators SET innovator_story = 'Description 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' WHERE innovator_id = 5;
UPDATE centie.innovators SET innovator_story = 'Description 6: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' WHERE innovator_id = 6;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;