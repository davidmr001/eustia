'cb keys isArrLike';

exports = function (obj, iteratee, ctx)
{
    iteratee = cb(iteratee, ctx);

    var _keys   = !isArrLike(obj) && keys(obj),
        len     = (_keys || obj).length,
        results = Array(len);

    for (var i = 0; i < len; i++)
    {
        var curKey = _keys ? _keys[i] : i;
        results[i] = iteratee(obj[curKey], curKey, obj);
    }

    return results;
};