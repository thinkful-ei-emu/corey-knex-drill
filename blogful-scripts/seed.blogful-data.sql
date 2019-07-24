INSERT INTO blogful_articles (title, data_published, content)
VALUES
  ('Today was a day', now() - '1 days'::INTERVAL, 'this is content1'),
  ('Mouse loose in the house', now() - '4 days'::INTERVAL, 'this is content2'),
  ('Cats fight outside mayors office', now() - '8 days'::INTERVAL, 'this is content3'),
  ('Butterfly 3 days from awakening', now() - '10 days'::INTERVAL, 'this is content4'),
  ('China on the hunt for fresh air', now() - '16 days'::INTERVAL, 'this is content5'),
  ('Earthquake in california today', now() - '25 days'::INTERVAL, 'this is content6'),
  ('Mt. Rainier set to spew lava', now() - '20 days'::INTERVAL, 'this is content7'),
  ('Cascadia developing new currency', now() - '29 days'::INTERVAL, 'this is content8'),
  ('All lives matter movement loosing traction', now() - '21 days'::INTERVAL, 'this is content9'),
  ('The dollar is depreciating', now() - '22 days'::INTERVAL, 'this is content10'),
  ('Cows ruining the ozone layer', now() - '17 days'::INTERVAL, 'this is content11'),
  ('Penny found heads down', now() - '7 days'::INTERVAL, 'this is content12'),
  ('Man looses control of wheel borrow', now() - '27 days'::INTERVAL, 'this is content13'),
  ('On this day, things happened', now() - '35 days'::INTERVAL, 'this is content14'),
  ('Last weekes weather was much better', now() - '5 days'::INTERVAL, 'this is content15'),
  ('BREAKING washington has 2 seasons', now() - '2 days'::INTERVAL, 'this is content16'),
  ('Garage sales turns out to be junk', now() - '14 days'::INTERVAL, 'this is content17'),
  ('One mans trash is another mans trash', now() - '25 days'::INTERVAL, 'this is content18'),
  ('Vaping actually kills you', now() - '21 days'::INTERVAL, 'this is content19'),
  ('Big tobbaco says smoking is cool for you', now() - '31 days'::INTERVAL, 'this is content20')
  ;