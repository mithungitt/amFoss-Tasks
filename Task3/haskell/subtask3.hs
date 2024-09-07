main :: IO ()
main = do
    putStr "Enter a number: "
    input <- getLine
    let n = read input :: Int
        n' = if even n then n + 1 else n
        mid = (n' + 1) `div` 2
    printDiamond mid

printDiamond :: Int -> IO ()
printDiamond mid = do
    printLines mid 1
    printLines (mid - 1) (-1)

printLines :: Int -> Int -> IO ()
printLines _ 0 = return ()
printLines mid i = do
    let spaces = replicate (mid - i) ' '
    let stars = replicate (2 * i - 1) '*'
    putStrLn (spaces ++ stars)
    printLines mid (i + step)
  where step = if i < mid then 1 else -1
