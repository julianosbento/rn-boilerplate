#!/usr/bin/env bash

# Declara as variaveis de leitura
declare -a arr
let i=0

# Cria o metodo de leitura
getDevices(){
  while read line
  do
    if [ -n "$line" ]
    then
      device="`echo $line | awk '{print $1}'`"
      arr[i]="$device"
      let i=$i+1
    fi
  done < <( eval $ANDROID_HOME/tools/emulator -list-avds)
}

# Chama metodo
getDevices

# Pergunta
PS3='Escolha em qual dispositivo deseja executar: '

# Tamanho do array
size="${#arr[@]}"

echo -e "================================================== "
echo -e "Foram localizados ${size} dispositivo(s)"
echo -e "================================================== \n"

#commando
command="$ANDROID_HOME/tools/emulator -avd "

# Gera as opÃ§Ãµes de escolha
options=()

for i in ${arr[@]}; do
    options+=($i)
done

options+=("Cancelar")

select opt in "${options[@]}"
do
    case $opt in

        "${arr[0]}")
           eval $command "${arr[0]}"
           break
        ;;

        "${arr[1]}")
          eval $command "${arr[1]}"
           break
        ;;

        "${arr[2]}")
          eval $command "${arr[2]}"
           break
        ;;

        "${arr[3]}")
          eval $command "${arr[3]}"
           break
        ;;

        "${arr[4]}")
         eval $command "${arr[4]}"
           break
        ;;

        "${arr[5]}")
          eval $command "${arr[5]}"
           break
        ;;

        "${arr[6]}")
         eval $command "${arr[6]}"
           break
        ;;

        "${arr[7]}")
          eval $command "${arr[7]}"
           break
        ;;

        "Cancelar")
            break
        ;;

        *) echo OpÃ§Ã£o InvÃ¡lida;;
    esac
done

echo -e "\n"
