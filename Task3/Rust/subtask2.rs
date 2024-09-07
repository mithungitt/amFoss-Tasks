use std::fs;

fn main() {
    let contents = fs::read_to_string("/home/mithun-krishna/Documents/amFossTasks/Task3/input.txt").unwrap();
    fs::write("/home/mithun-krishna/Documents/amFossTasks/Task3/output.txt", contents).unwrap();
}
