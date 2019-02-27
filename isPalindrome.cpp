using namespace std;
#include <string>

bool isPalindrone(string str)
{
  int idx1 = 0;
  int idx2 = str.length() - 1;
  while (idx1 <= idx2)
  {
    if (str[idx1] != str[idx2])
    {
      return false;
    }
    else
    {
      idx1++;
      idx2--;
    }
  };
  return true;
}

