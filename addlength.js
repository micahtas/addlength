/**
 * Created by Micah on 9/24/2015.
 */

function addlength(list)
{
  return _.map(_.keys(list), function(key)
  {
    return [list[key], list.length];
  });
}
console.log(addlength(["apple", "pear"]));
