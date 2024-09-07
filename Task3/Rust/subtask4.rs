use std::fs;
use std::io::{self, BufRead};

fn main() -> io::Result<()> {
    let file = fs::File::open("/home/mithun-krishna/Documents/amFossTasks/Task3/input.txt")?;
    let reader = io::BufReader::new(file);
    let mut number = None;

    for line in reader.lines() {
        if let Ok(l) = line {
            if let Some(pos) = l.find('=') {
                let value = &l[pos + 1..].trim();
                if let Ok(n) = value.parse::<u32>() {
                    number = Some(if n % 2 == 0 { n + 1 } else { n });
                    break;
                }
            }
        }
    }

    let n = number.unwrap_or(1);
    let mid = (n + 1) / 2;
    let mut output = String::new();

    for i in 1..=mid {
        let spaces = " ".repeat((mid - i) as usize);
        let stars = "*".repeat((2 * i - 1) as usize);
        output.push_str(&format!("{}{}\n", spaces, stars));
    }

    for i in (1..mid).rev() {
        let spaces = " ".repeat((mid - i) as usize);
        let stars = "*".repeat((2 * i - 1) as usize);
        output.push_str(&format!("{}{}\n", spaces, stars));
    }

    fs::write("/home/mithun-krishna/Documents/amFossTasks/Task3/output.txt", output)?;

    Ok(())
}
