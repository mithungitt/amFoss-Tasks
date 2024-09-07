import System.IO
import Data.List (isPrefixOf)

main :: IO ()
main = do
    contents <- readFile "input.txt"
    let number = extractNumber contents
        n = if even number then number + 1 else number
        mid = (n + 1) `div` 2
        top = [ replicate (mid - i) ' ' ++ replicate (2 * i - 1) '*' | i <- [1..mid] ]
        bottom = [ replicate (mid - i) ' ' ++ replicate (2 * i - 1) '*' | i <- reverse [1..(mid - 1)] ]
        diamond = unlines (top ++ bottom)

    writeFile "output.txt" diamond

extractNumber :: String -> Int
extractNumber str =
    let linesOfFile = lines str
        numberLine = head [ drop 2 l | l <- linesOfFile, "n=" `isPrefixOf` l ]
    in read numberLine :: Int
