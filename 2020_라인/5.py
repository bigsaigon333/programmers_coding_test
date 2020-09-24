def solution(cards):
    idx = 0
    
    def sumc(l, dc) :
        ret = 0
        numA = 0
        
        for i in l :
            if i > 10 :
                ret += 10
                continue
                
            if i == 1 :
                numA += 1
                
            ret += i
        
        if dc == 1 or dc >= 7 :
            while numA and 17<= ret + 10 <= 21:
                ret += 10
                numA -= 1
        elif dc == 2 or dc == 3 :
            while numA and 12<= ret + 10 <= 21:
                ret += 10
                numA -= 1  
        else :
            while numA and ret + 10 <= 21:
                ret += 10
                numA -= 1
        
        return ret           
                
            

    money = 0    
    while idx < len(cards) :
        try: 
            pl = [cards[idx]]
            idx += 1

            dl = [cards[idx]]
            idx += 1

            pl.append(cards[idx])
            idx += 1

            dl.append(cards[idx])
            idx += 1
            
            print("Player 초기카드: ", pl, sumc(pl, dl[1]))
            print("Dealer 초기카드: ", dl, sumc(dl, 1))
            
#           5. Player
            if sumc(pl, dl[1]) == 21:
                if sumc(pl, dl[1]) > sumc(dl, 1) :
                    money += 3
                print("Player Black Jack", pl, sumc(pl, dl[1]))
                continue

            
            if dl[1] == 1 or dl[1] >= 7 :
                while sumc(pl, dl[1]) <= 17 :
                    pl.append(cards[idx])
                    idx+=1
            elif dl[1] == 2 or dl[1] == 3 :
                while sumc(pl, dl[1]) <= 12 :
                    pl.append(cards[idx])
                    idx+=1 
            
            print("Player 최종카드: ", pl, sumc(pl, dl[1]))


            if sumc(pl, dl[1]) > 21 :
                money -= 2
                print("Player 터짐", pl, sumc(pl, dl[1]))                                
                continue


                
#           6. Dealer
            while sumc(dl, 1) <= 17:
                dl.append(cards[idx])
                idx+= 1

            print("Dealer 최종카드: ", dl, sumc(dl, 1))
                
                
            if sumc(dl, 1) > 21 :
                money += 2
                print("Dealer 터짐", dl, sumc(dl, 1))                
                continue

            print("Player: ", pl, sumc(pl, dl[1]))
            print("Dealer: ", dl, sumc(dl, 1))
            

            if sumc(pl, dl[1]) > sumc(dl, 1) :
                money += 2
            elif sumc(pl, dl[1]) < sumc(dl, 1) :
                money -= 2   
        except:
            break
        
        
        
    
    return money