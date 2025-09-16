function Card({hash1="photography",hash2 = "travel", hash3="winter"}) {
  return (
    <div class="max-w-sm rounded-xl overflow-hidden shadow-lg p-4 m-4 bg-gray-900">
      <img class="w-full" src="https://media.istockphoto.com/id/1136834574/photo/watzmann-in-alps-dramatic-reflection-at-sunset-national-park-berchtesgaden.jpg?s=1024x1024&w=is&k=20&c=ZxdnloBamOnWT-a4WP7I9yYEOw3AqVs_xNy8SMm0kog=" alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hash1}</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hash2}</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hash3}</span>
      </div>
  </div>
  );
}


export default Card