class Helper {
    /**
     * Проверяет свойство объекта что оно существует и что не пустое
     * return false|{object}
     */
    static getHasProperty($object, $property) {
        return $object.hasOwnProperty($property) && Object.keys($object[$property]).length ? $object[$property] : null;
    }
}

module.exports = Helper;

