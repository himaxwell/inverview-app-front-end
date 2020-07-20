["RailsConf", "React Conf"].each do |conf_name|
  Conference.create!(
    name: conf_name,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    )
end
